import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <motion.div 
        className="absolute top-8 left-8 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => navigate('/')}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 
            bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          QueryX
        </button>
      </motion.div>
      
      {/* Divider Line */}
      <div className="absolute top-[4.5rem] left-0 right-0 h-px bg-gradient-to-r 
        from-transparent via-blue-500/40 to-transparent z-10" />
    </div>
  );
};

export default Header; 