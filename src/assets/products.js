 import Cl from "./CS1.jpg"
 import ws from "./WS1.jpg";
 
 export const products = {
    shirts: [
      {
        id: 1,
        name: "Classic Flannel Shirt",
        type: "Flannel",
        price: 1299,
        image: Cl
      },
      {
        id: 2,
        name: "Plain White Shirt",
        type: "Plain",
        price: 899,
        image: ws
      },
      {
        id: 3,
        name: "Linen Summer Shirt",
        type: "Linen",
        price: 1499,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 4,
        name: "Checked Flannel Shirt",
        type: "Flannel",
        price: 1399,
        image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 5,
        name: "Blue Linen Shirt",
        type: "Linen",
        price: 1599,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 6,
        name: "Black Plain Shirt",
        type: "Plain",
        price: 999,
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 7,
        name: "Red Flannel Shirt",
        type: "Flannel",
        price: 1349,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 8,
        name: "Grey Linen Shirt",
        type: "Linen",
        price: 1449,
        image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 9,
        name: "Plain Blue Shirt",
        type: "Plain",
        price: 1099,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
      }
    ],
    jeans: [
      {
        id: 1,
        name: "Slim Fit Jeans",
        type: "Slim",
        price: 1599,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 2,
        name: "Regular Fit Jeans",
        type: "Regular",
        price: 1399,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 3,
        name: "Skinny Fit Jeans",
        type: "Skinny",
        price: 1699,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 4,
        name: "Tapered Fit Jeans",
        type: "Tapered",
        price: 1499,
        image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 5,
        name: "Relaxed Fit Jeans",
        type: "Relaxed",
        price: 1299,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 6,
        name: "Bootcut Jeans",
        type: "Bootcut",
        price: 1799,
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 7,
        name: "Straight Fit Jeans",
        type: "Straight",
        price: 1499,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 8,
        name: "Distressed Skinny Jeans",
        type: "Skinny",
        price: 1899,
        image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 9,
        name: "Classic Blue Jeans",
        type: "Regular",
        price: 1399,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
      }
    ],
    shoes: [
      {
        id: 1,
        name: "Classic Sneakers",
        type: "Sneakers",
        price: 1999,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 2,
        name: "Leather Loafers",
        type: "Loafers",
        price: 2499,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 3,
        name: "Running Shoes",
        type: "Running",
        price: 1799,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 4,
        name: "Canvas Sneakers",
        type: "Sneakers",
        price: 1599,
        image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 5,
        name: "Formal Oxford Shoes",
        type: "Formal",
        price: 2999,
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 6,
        name: "Slip-on Loafers",
        type: "Loafers",
        price: 2299,
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 7,
        name: "Trail Running Shoes",
        type: "Running",
        price: 1899,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 8,
        name: "Classic Derby Shoes",
        type: "Formal",
        price: 2799,
        image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80"
      },
      {
        id: 9,
        name: "White Canvas Sneakers",
        type: "Sneakers",
        price: 1699,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
      }
    ]
  }