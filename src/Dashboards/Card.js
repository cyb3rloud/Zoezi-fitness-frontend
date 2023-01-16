import React, { useState } from "react";
import "./Dashboard.css";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  console.log(param)
  return (
    <motion.div
      className="CompactCard"
      style={param.style}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <div>{param.title}</div>
        <span>{param.count}</span>
      </div>
      <div className="detail">
        <span>{Png}</span>
        <span>{param.count}</span>
        <span>In the Last 24 hours</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <span >{param.value}</span>
      <span>{Png}</span>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
