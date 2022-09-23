<template>
  <div class="app-container">
    修改测试11
    <el-card>
      <el-form :model="form" inline label-width="100px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="分类" prop="sort">
              <el-select v-model.number="form.sort" placeholder="选择分类">
                <el-option label="全部" value="" key="" />
                <el-option
                  v-for="opt in sortOpts"
                  :label="opt.label"
                  :value="opt.value"
                  :key="opt.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="品牌" prop="brand">
              <el-input v-model="form.brand" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="型号" prop="type">
              <el-input v-model="form.type" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="最低价" prop="minPrice">
              <el-input-number v-model="form.minPrice" :min="0" :max="50000" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="最高价" prop="maxPrice">
              <el-input-number v-model="form.maxPrice" :min="0" :max="50000" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label=" ">
              <el-button @click="findAir" type="primary">查询</el-button>
              <el-button @click="generateMd" type="primary">生成</el-button>
              <el-button @click="addAir" type="primary">新建</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <el-table class="mt20" :data="tableData" border>
      <el-table-column label="分类" align="center">
        <template #default="scope">
          {{ getOptLabel(scope.row.sort) }}
        </template>
      </el-table-column>
      <el-table-column prop="brand" label="品牌" align="center" />
      <el-table-column prop="type" label="型号" align="center" />
      <el-table-column prop="price" label="价格" align="center" />
      <el-table-column prop="power" label="匹数" align="center" />
      <el-table-column prop="quality" label="质保" align="center" />
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="editorAir(scope.row)">
            编辑
          </el-button>
          <el-button link type="danger" size="small" @click="deleteAir(scope.row)">删除</el-button>
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
  import { ref, unref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getList, delAir, generateAirMd } from '@/api/air';
  import { useClipboard, usePermission } from '@vueuse/core';
  import { ElMessage, ElMessageBox } from 'element-plus';
  import { getOptLabel } from './constant';
  import type { Air } from '@/api/models/airModels';
  import Pagination from '@/components/Pagination/index.vue';

  import { sortOpts } from './constant';

  // hook
  import usePagination from '@/hooks/usePagination';

  const router = useRouter();
  const { total, query } = usePagination();

  const form = ref({
    sort: '',
    brand: '',
    type: '',
    minPrice: 0,
    maxPrice: 50000
  });

  const tableData = ref<Air[]>([]);

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

  const findAir = () => {
    query.page = 1;
    getPageList();
  };

  const { copy } = useClipboard();
  const clipboardAccess = usePermission('clipboard-write');
  console.log(unref(clipboardAccess));
  const generateMd = () => {
    generateAirMd().then((res) => {
      if (unref(clipboardAccess) === 'granted') return copy(res.data);

      md.value = res.data;
      dialogVisible.value = true;
    });
  };
  const addAir = () => {
    router.push({
      path: '/air/add'
    });
  };
  const editorAir = (row: Air) => {
    router.push({
      path: `/air/editor/${row.id}`
    });
  };
  const deleteAir = (row: Air) => {
    if (!row.id) return;
    ElMessageBox.confirm('是否确认删除？', '提示', {
      confirmButtonText: '删除',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        delAir(row.id as string).then((res) => {
          console.log(res);
          const type = res.code === 90001 ? 'success' : 'error';
          ElMessage({
            message: res.msg,
            type
          });
          getPageList();
        });
      })
      .catch(() => {});
  };

  getPageList();
</script>

<style lang="scss" scoped>
  .el-form-item {
    width: 70%;
  }
</style>
