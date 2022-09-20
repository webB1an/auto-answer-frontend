<template>
  <div class="handle-container">
    <el-card>
      <template #header>{{ title }}</template>
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="120px"
        size="default"
        status-icon
      >
        <el-row>
          <el-col :span="8">
            <el-form-item label="类型" prop="sort">
              <el-select v-model.number="form.sort" placeholder="选择类型">
                <el-option
                  v-for="opt in sortOpts"
                  :label="opt.label"
                  :value="opt.value"
                  :key="opt.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="品牌" prop="brand">
              <el-input v-model="form.brand" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="名称" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="价格" prop="price">
              <el-input v-model.number="form.price" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="链接" prop="url">
              <el-input v-model="form.url" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="图片链接" prop="pic">
              <el-input v-model="form.pic" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="排风量" prop="wind">
              <el-input v-model.number="form.wind" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="火力" prop="fire">
              <el-input v-model.number="form.fire" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="风压" prop="pa">
              <el-input v-model.number="form.pa" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item
              v-for="(des, index) in form.describe"
              :key="des.key"
              :label="`描述${index + 1}`"
              :prop="'describe.' + index + '.value'"
              :rules="{
                required: true,
                message: '描述不能为空',
                trigger: 'blur'
              }"
            >
              <el-input v-model="des.value" type="textarea" />

              <div class="mt10">
                <el-button type="danger" @click="deleteDescribe(index)">删除</el-button>
              </div>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button @click="addDescribe">新增描述</el-button>
          <el-button @click="resetForm(formRef)">重置</el-button>
          <el-button type="primary" @click="submitForm(formRef)">{{
            id ? '更新' : '新建'
          }}</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { useRoute } from 'vue-router';
  import { ElMessage } from 'element-plus';
  import type { FormInstance, FormRules } from 'element-plus';

  import { addCooker, getCookerDetail, editorCooker } from '@/api/cooker';

  const route = useRoute();

  const id = route.params?.id as string;
  const title = id ? '编辑' : '新建';

  const sortOpts = [
    {
      label: '蒸箱款',
      value: 1
    },
    {
      label: '烤箱款',
      value: 2
    },
    {
      label: ' 消毒柜款',
      value: 3
    },
    {
      label: '蒸烤一体款',
      value: 4
    }
  ];

  const formRef = ref<FormInstance>();

  let form = ref({
    sort: '',
    brand: '',
    name: '',
    price: '',
    url: '',
    pic: '',
    wind: '',
    fire: '',
    pa: '',
    describe: [
      {
        key: 1,
        value: ''
      }
    ]
  });

  const rules = reactive<FormRules>({
    sort: [{ type: 'number', required: true, message: '请选择类型', trigger: 'change' }],
    brand: [{ required: true, message: '请输入品牌名', trigger: 'blur' }],
    name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
    price: [{ type: 'number', required: true, message: '请输入价格', trigger: 'blur' }],
    url: [{ required: true, message: '请输入 url', trigger: 'blur' }],
    pic: [{ required: true, message: '请输入图片链接', trigger: 'blur' }],
    wind: [{ type: 'number', required: true, message: '请输入排风量', trigger: 'blur' }],
    fire: [{ type: 'number', required: true, message: '请输入火力', trigger: 'blur' }],
    pa: [{ type: 'number', required: true, message: '请输入风压', trigger: 'blur' }]
  });

  const deleteDescribe = (index: number) => {
    if (form.value.describe.length === 1) {
      return ElMessage({
        message: '至少要保留一条描述！',
        type: 'warning'
      });
    }
    form.value.describe.splice(index, 1);
  };
  const addDescribe = () => {
    form.value.describe = [...form.value.describe, { key: Date.now(), value: '' }];
  };

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate(async (valid) => {
      if (valid) {
        let res;
        if (id) {
          res = await editorCooker({
            ...form.value,
            describe: form.value.describe.map((des) => des.value)
          });
        } else {
          res = await addCooker({
            ...form.value,
            describe: form.value.describe.map((des) => des.value)
          });
        }

        const type = res.code === 90001 ? 'success' : 'error';
        ElMessage({
          message: res.msg,
          type
        });
        init(id);
      } else {
        console.log('error submit!');
        return false;
      }
    });
  };

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
  };

  const init = (id?: string) => {
    if (id) {
      getCookerDetail(id).then((res) => {
        if (res.code === 90001) {
          const _data = res.data;
          const describe = _data.describe.map((value, index) => ({
            key: index,
            value
          }));

          form.value = { ..._data, describe };
        }
      });
    }
  };

  init(id);
</script>

<style lang="scss" scoped></style>
