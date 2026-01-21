import { motion, AnimatePresence, color } from "framer-motion";

import { useState } from "react"
import { useNavigate } from "react-router-dom";
import shirtsBG from "../../assets/shirtsBG.jpg";
import { linearGradient } from "framer-motion/client";
// import jeansBG from "../../assets/jeansBG.jpg";
// import shoesBG from "../../assets/shoesBG.jpg"; 
import { products } from "../../assets/products.js";

export default function Categories(){
    const navigate = useNavigate();

    function openShopList(item) {
      // Navigate to /shop and pass the selected category as state
      navigate("/Shop", { state: { category: selectedTab.key,item } });
    }
 

const tabs = [
  { label: "Shirts", key: "shirts" },
  { label: "Jeans", key: "jeans" },
  { label: "Shoes", key: "shoes" },
]

const container = {
  width: "100%",
  height: "100%",
  background: "#fff",
  borderRadius: 10,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
}

const nav = {
  padding: 8,
  borderBottom: "1px solid #eee",
}

const tabsContainer = {
  display: "flex",
  listStyle: "none",
  padding: 0,
  margin: 0,
}

const tab = {
  flex: 1,
  padding: "40px",
  cursor: "pointer",
  position: "relative",
  textAlign: "center",
  backgroundImage: `url(${shirtsBG})`,
  backgroundImage:`linearGradient(0, "rgba(140, 108, 230, 0.5)", "rgba(49, 11, 99, 0.5)")`,
  // backgroundPosition: "center",
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  // color: "white",
  // fontWeight: "600",
  // backdropFilter: "brightness(0.7)",
}

const underline = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 2,
  background: "black",
}

const content = {
  flex: 1,
  padding: 16,
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 12,
}

const card = {
  height: 400,
  background: "#f5f5f5",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 500,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}


  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div style={container}>
      <nav style={nav}>
        <ul style={tabsContainer}>
          {tabs.map((tabItem) => (
            <motion.li
              key={tabItem.key}
              initial={false}
              animate={{
                backgroundColor:
                  tabItem.key === selectedTab.key ? "#eee" : "#eee0",
              }}
              style={tab}
              onClick={() => setSelectedTab(tabItem)}
            >
              {tabItem.label}
              {tabItem.key === selectedTab.key && (
                <motion.div layoutId="underline" style={underline} />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>

      <main style={content}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={grid}
          >
            {products[selectedTab.key].slice(0, 4).map((item) => (
              <motion.div
                key={item.id}
                layout
                whileHover={{ scale: 1.05 }}
                style={{ ...card, backgroundImage: `url(${item.image})` }}
                onClick={() => openShopList(item)}
              >
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
