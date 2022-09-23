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
            <el-form-item label="分类" prop="sort">
              <el-select v-model.number="form.sort" placeholder="选择分类">
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
            <el-form-item label="型号" prop="type">
              <el-input v-model="form.type" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="价格" prop="price">
              <el-input v-model.number="form.price">
                <template #append>元</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="匹数" prop="power">
              <el-input v-model="form.power">
                <template #append>匹</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <el-form-item label="质保" prop="quality">
              <el-input v-model.number="form.quality">
                <template #append>年</template>
              </el-input>
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
  import { useRoute, useRouter } from 'vue-router';
  import { ElMessage } from 'element-plus';
  import { addAir, getAirDetail, editorAir } from '@/api/air';
  import { sortOpts } from './constant';
  import type { FormInstance, FormRules } from 'element-plus';

  const route = useRoute();
  const router = useRouter();

  const id = route.params?.id as string;
  const title = id ? '编辑' : '新建';

  const formRef = ref<FormInstance>();

  let form = ref({
    sort: '',
    brand: '',
    type: '',
    price: '',
    power: '',
    quality: '',
    url: '',
    describe: [
      {
        key: 1,
        value: ''
      }
    ]
  });

  let validatorNumber = (_rule, value, callback) => {
    if (!value) return callback(new Error('请输入内容'));
    if (!Number(value)) return callback(new Error('请输入数字值'));
    let reg = /((^[1-9]\d*)|^0)(\.\d{0,2}){0,1}$/;
    if (!reg.test(value)) return callback(new Error('请输入正确数字'));
    callback();
  };

  const rules = reactive<FormRules>({
    sort: [{ type: 'number', required: true, message: '请选择类型', trigger: 'change' }],
    brand: [{ required: true, message: '请输入品牌名', trigger: 'blur' }],
    type: [{ required: true, message: '请输入型号', trigger: 'blur' }],
    price: [{ type: 'number', required: true, message: '请输入价格', trigger: 'blur' }],
    power: [{ required: true, validator: validatorNumber, trigger: 'blur' }],
    quality: [{ type: 'number', required: true, message: '请输入匹数', trigger: 'blur' }],
    url: [{ required: true, message: '请输入 url', trigger: 'blur' }]
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
          res = await editorAir({
            ...form.value,
            describe: form.value.describe.map((des) => des.value)
          });
        } else {
          res = await addAir({
            ...form.value,
            describe: form.value.describe.map((des) => des.value)
          });
        }

        const type = res.code === 90001 ? 'success' : 'error';
        ElMessage({
          message: res.msg,
          type
        });

        res.code === 90001 && router.back();
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
      getAirDetail(id).then((res) => {
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
