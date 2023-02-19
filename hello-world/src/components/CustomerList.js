import React from 'react'

function CustomerList() {
  const customers = [
    {
      id: 1,
      name: 'Osman',
      age: 27,
      skill: '.NET'
    },
    {
      id: 2,
      name: 'Ali',
      age: 22,
      skill: 'React JS'
    },
    {
      id: 3,
      name: 'Belgin',
      age: 25,
      skill: 'BA'
    }
  ]
  
  const customerList = customers.map(customer => {
    return <h2 key={customer.id}>Name:{customer.name}, Age:{customer.age}, Skill:{customer.skill}</h2>
  });

  return (
    <div> {customerList} </div>
  )
}

export default CustomerList
