const products = [
  {
    id: "1",
    name: "Pantalon clasico",
    price: 5500,
    category: "pantalones",
    img: "https://d2r9epyceweg5n.cloudfront.net/stores/002/748/371/products/img_45651-c03c65eeaed9bfa7c316740021253590-640-0.webp",
    stock: 25,
    description: `
MEDIDAS APROXIMADAS

Talle 36
Cintura 41
Cadera 48
Largo 102

Talle 38
Cintura 43
Cadera 50
Largo 102

Talle 40 
Cintura 44
Cadera 53
Largo 103 

Talle 42
Cintura 46
Cadera 58
Largo 105
    `,
  },
  {
    id: "2",
    name: "Cargo Combinado",
    price: 6500,
    category: "pantalones",
    img: "https://d2r9epyceweg5n.cloudfront.net/stores/002/748/371/products/img_45611-43df1ebffc51f74f0016740024272914-640-0.webp",
    stock: 16,
    description: `
    MEDIDAS APROXIMADAS
    
    Talle 36
    Cintura 41
    Cadera 48
    Largo 102
    
    Talle 38
    Cintura 43
    Cadera 50
    Largo 102
    
    Talle 40 
    Cintura 44
    Cadera 53
    Largo 103 
    
    Talle 42
    Cintura 46
    Cadera 58
    Largo 105
        `,
  },
  {
    id: "3",
    name: "Cargo Marron",
    price: 6000,
    category: "pantalones",
    img: "https://d2r9epyceweg5n.cloudfront.net/stores/002/748/371/products/img_45631-0384ac80162a3e16b816739774272110-640-0.webp",
    stock: 16,
    description: `
    MEDIDAS APROXIMADAS
    
    Talle 36
    Cintura 41
    Cadera 48
    Largo 102
    
    Talle 38
    Cintura 43
    Cadera 50
    Largo 102
    
    Talle 40 
    Cintura 44
    Cadera 53
    Largo 103 
    
    Talle 42
    Cintura 46
    Cadera 58
    Largo 105
        `,
  },
  {
    id: "4",
    name: "Over Butterfly",
    price: 4500,
    category: "remeras",
    img: "https://d2r9epyceweg5n.cloudfront.net/stores/002/748/371/products/img_72011-b582f5ca93543abed816739999025020-640-0.webp",
    stock: 16,
    description: `
    Remera talle 1
    Largo: 76
    Ancho bajo cisa: 58
    Ancho hombro 50
    
    Remera talle 2
    Largo: 77
    Ancho bajo cisa : 60
    Ancho hombro : 52
    `,
  },
  {
    id: "5",
    name: "Over 2001",
    price: 4000,
    category: "remeras",
    img: "https://d2r9epyceweg5n.cloudfront.net/stores/002/748/371/products/b48982af-1f75-4824-94b3-3bdaf501e4161-f8813cd143e3505f3816739735566659-640-0.webp",
    stock: 10,
    description: `
    Remera talle 1
    Largo: 76
    Ancho bajo cisa: 58
    Ancho hombro 50
    
    Remera talle 2
    Largo: 77
    Ancho bajo cisa : 60
    Ancho hombro : 52
    `,
  },
  {
    id: "6",
    name: "Over Clasica",
    price: 3500,
    category: "remeras",
    img: "https://d2r9epyceweg5n.cloudfront.net/stores/002/748/371/products/img_45791-469e39dd642701f54f16739740357955-640-0.webp",
    stock: 10,
    description: `
    Remera talle 1
    Largo: 76
    Ancho bajo cisa: 58
    Ancho hombro 50
    
    Remera talle 2
    Largo: 77
    Ancho bajo cisa : 60
    Ancho hombro : 52
    `,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};
