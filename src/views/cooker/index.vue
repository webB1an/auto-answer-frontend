<template>
  <div class="app-container">
    <el-card>
      <el-form :model="form" inline>
        <el-row>
          <el-col :span="8">
            <el-form-item label="品牌" prop="brand">
              <el-input v-model="form.brand" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="名称" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-button @click="findCooker" type="primary">查询</el-button>
              <el-button @click="generateMd" type="primary">生成</el-button>
              <el-button @click="addCooker" type="primary">新建</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-table class="mt20" :data="tableData" border>
      <el-table-column prop="sort" label="分类" align="center" />
      <el-table-column prop="brand" label="品牌" align="center" />
      <el-table-column prop="name" label="名称" align="center" />
      <el-table-column prop="price" label="价格" align="center" />
      <el-table-column prop="wind" label="排风量" align="center" />
      <el-table-column prop="fire" label="火力" align="center" />
      <el-table-column prop="pa" label="风压" align="center" />
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="editorCooker(scope.row)">
            编辑
          </el-button>
          <el-button link type="danger" size="small" @click="deleteCooker(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <Pagination
      class="mt20"
      v-if="total > 0"
      v-model:page="query.page"
      v-model:limit="query.pageSize"
      :total="total"
      @pagination="handlePageChange"
    />

    <el-dialog v-model="dialogVisible" title="复制生成内容" width="80%">
      <el-input v-model="md" type="textarea" rows="10" />
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getList, delCooker, generateCookerMd } from '@/api/cooker';
  import { useClipboard } from '@vueuse/core';
  import { ElMessage } from 'element-plus';
  import type { Cooker } from '@/api/models/cookerModels';

  import Pagination from '@/components/Pagination/index.vue';

  // hook
  import usePagination from '@/hooks/usePagination';

  const router = useRouter();
  const { total, query } = usePagination();

  const form = ref({
    brand: '',
    name: ''
  });

  const tableData = ref<Cooker[]>([]);

  const dialogVisible = ref(false);
  const md = ref('');

  const getPageList = () => {
    getList({
      ...query,
      requestData: {
        ...form.value
      }
    }).then((res) => {
      console.log(res.data);
      tableData.value = res.data.list;
      total.value = res.data.total;
    });
  };

  const handlePageChange = () => {
    getPageList();
  };

  const findCooker = () => {
    query.page = 1;
    getPageList();
  };

  const { copy, isSupported } = useClipboard();
  // const clipboardAccess = usePermission('clipboard-write');
  // console.log(unref(clipboardAccess));
  const generateMd = () => {
    generateCookerMd().then((res) => {
      if (isSupported) return copy(res.data);

      md.value = res.data;
      dialogVisible.value = true;
    });
  };
  const addCooker = () => {
    router.push({
      path: '/cooker/add'
    });
  };
  const editorCooker = (row: Cooker) => {
    router.push({
      path: `/cooker/editor/${row.id}`
    });
  };
  const deleteCooker = (row: Cooker) => {
    if (!row.id) return;
    delCooker(row.id).then((res) => {
      console.log(res);
      const type = res.code === 90001 ? 'success' : 'error';
      ElMessage({
        message: res.msg,
        type
      });
      getPageList();
    });
  };

  getPageList();
</script>

<style lang="scss" scoped>
  .el-form-item {
    width: 70%;
  }
</style>
