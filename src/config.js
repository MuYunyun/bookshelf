const Config = [
  {
    imgUrl: 'xxx',
    title: 'Rust权威指南',
    year: '2023',
    tags: ['编程'],
    status: '在读'
  },
  {
    imgUrl: 'xxx',
    title: '淘宝十年产品事',
    year: '2023',
    tags: ['产品'],
    status: '在读'
  },
  {
    imgUrl: 'xxx',
    title: '程序员修炼之道',
    year: '2022',
    tags: ['编程'],
    status: '已读'
  },
  {
    imgUrl: 'xxx',
    title: '邓小平时代',
    year: '2022',
    tags: ['生活'],
    status: '已读'
  },
  {
    imgUrl: 'xxx',
    title: '瓦尔纳宝典',
    year: '2022',
    tags: ['生活'],
    status: '已读'
  },
  {
    imgUrl: 'xxx',
    title: '拼多多开店全攻略',
    year: '2020',
    tags: ['生活'],
    status: '已读'
  },
]

const convertYearTree = (configArr) => {
  const obj = {}
  configArr.forEach(element => {
    const { year } = element
    if (!obj[year]) {
      obj[year] = [{ ...element }]
    } else {
      obj[year].push({ ...element })
    }
  })
  return obj
}

export default Config
export { convertYearTree }
