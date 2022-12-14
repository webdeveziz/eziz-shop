const category = [
  { id: '1id1', title: 'electronics' },
  { id: '2id2', title: 'jewelery' },
  { id: '3id3', title: `men's clothing` },
  { id: '4id4', title: "women's clothing" },
]

// const categories = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(category)
//     }, 1000)
//   })

const categories = () => fetch('https://fakestoreapi.com/products/categories')

export default { categories }
