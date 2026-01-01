import { skillsData } from "../../data/Skill";
import { motion } from "framer-motion";
const Skills = () => {
  const items = [...skillsData, ...skillsData];
  return (
    <section className="w-full h-35 flex flex-col items-center">
      <h2 className="font-bold text-gray-500 mt-5">
        POWERING EXPERIENCES WITH
      </h2>
      <div className="w-full overflow-hidden mt-6">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {items.map((s, idx) => (
            <div
              key={`${s.id} - ${idx}`}
              className="flex items-center gap-2 px-6 py-2"
            >
              <img
                src={s.icon}
                alt={s.name}
                className="h-5 w-5 object-contain"
              />
              <span className="text-gray-500 font-semibold">{s.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
