<!--
* @description vue list
* @fileName list.vue
* @author lorenzo hee
* @date 2021/05/10 17:58:10
!-->
<template>
  <div style="margin: 16px;">
    <Button style="margin:8px 0" @click="handleModal()">Add</Button>
    <Table
      :dataSource="navSource"
      :columns="columns"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
      :rowKey="(record)=>record._id">
      <template #category="{ text: category }">
        {{ category.title }}
      </template>
      <template #icon="{ text }">
        <Image
          :src="text"
          :width='32'
          :height='32'
          fallback="data:image/png;base64,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"></Image>
      </template>
      <template #action="{ record }">
        <span>
          <a @click="editRecord(record)">Edit</a>
          <Divider type="vertical" />
          <a @click="deleteRecord(record)">Delete</a>
        </span>
      </template>  
    </Table>
  </div>
  <Modal v-model:visible="formVisible" title="new" @ok="handleSubmit">
    <Form :model="selectedNav.nav" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }" :rules="rules">
      <Item name="title" ref="title" label="标题">
        <Input v-model:value="selectedNav.nav.title" />
      </Item>
      <Item name="link" ref="link" label="链接">
        <Input v-model:value="selectedNav.nav.link" />
      </Item>
      <Item name="category" ref="category" label="分类">
        <Input v-model:value="selectedNav.nav.category" />
      </Item>
      <Item name="description" ref="description" label="描述">
        <TextArea v-model:value="selectedNav.nav.description" autoSize=true allowClear=true />
      </Item>
    </Form>
  </Modal>
</template>

<script>
import { defineComponent, computed, ref, reactive } from 'vue'
import { usePagination, useRequest } from 'vue-request'
import navService from '../../service/nav.service'
import { Table, Button, Modal, Form, Input, Divider, Image } from 'ant-design-vue'
const { Item } = Form
const { TextArea } = Input
export default defineComponent({
  components: {
    Table,
    Button,
    Modal,
    Form,
    Input,
    Item,
    TextArea,
    Divider,
    Image,
  },
  setup() {
    const formVisible = ref(false)
    const selectedNav = reactive({ nav: {}})
    const rules = {
      title: [
        { required: true, message: '标题不能为空', trigger: 'blur'}
      ],
      link: [
        { required: true, message: '链接不能为空', trigger: 'blur'}
      ],
      category: [
        { required: true, message: '分类不能为空', trigger: 'blur'}
      ],
      description: [
        { required: true, message: '描述不能为空', trigger: 'blur'}
      ],
    }
    const {run: runSave} = useRequest(navService.saveNav, {manual: true})
    const {run: runDelete} = useRequest(navService.deleteNav, {manual: true})
    const columns = [
          {
            title: 'Icon',
            dataIndex: 'icon',
            key: 'icon',
            slots: { customRender: 'icon' },
          },
          {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: '链接',
            dataIndex: 'link',
            key: 'link',
          },
          {
            title: '分类',
            dataIndex: 'category',
            key: 'category',
            slots: { customRender: 'category' },
          },
          {
            title: '描述',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true,
          },
          {
            title: '操作',
            key: 'action',
            slots: { customRender: 'action' },
          },
        ];
    const { data: navSource, run, loading, current, pageSize, total, refresh } = usePagination(
      navService.getList,
      {
        formatResult: res=>res.data,
        pagination: {
          currentKey: 'page',
          pageSizeKey: 'results',
          totalKey: 'total',
        }
      }
    )
    const pagination = computed(()=>({
      total: total.value,
      current: current.value,
      pageSize: pageSize.value,
    }))
    const handleTableChange = (pag, filters, sorter) => {
      run({
        results: pag.pageSize,
        page: pag?.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      })
    }
    const handleModal = () => {
      selectedNav.nav= {}
      formVisible.value = true
    }
    const editRecord = (record) => {
      record.category = record.category.title
      selectedNav.nav = record
      formVisible.value = true
    }
    const handleSubmit = () => {
      selectedNav.nav.icon = `${selectedNav.nav.link}/favicon.ico`
      runSave({postData: selectedNav.nav}).then(()=>{
        formVisible.value = false
        refresh()
      })
    }
    const deleteRecord = (nav) => {
      runDelete(nav._id).then(()=>refresh())
    }
    return { navSource, columns, pagination, handleTableChange, loading, handleModal, formVisible, selectedNav, handleSubmit, editRecord, rules, deleteRecord }
  },
})

</script>
<style lang='less' scoped>
</style>