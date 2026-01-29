import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FileText, UserCheck, Rocket, RefreshCcw, ArrowRight } from 'lucide-react';

const Card = ({ data, index, onSwipe, active }) => {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-15, 15]);
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

    const handleDragEnd = (event, info) => {
        if (info.offset.x > 100) {
            onSwipe(data.id, 'right');
        } else if (info.offset.x < -100) {
            onSwipe(data.id, 'left');
        }
    };

    return (
        <motion.div
            drag={active ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{
                x,
                rotate,
                opacity,
                zIndex: 30 - index, // Lower Z-Index to prevent navbar overlap
                cursor: active ? 'grab' : 'default'
            }}
            animate={{
                scale: active ? 1 : 1 - (index * 0.05),
                y: index * 15,
                rotate: active ? 0 : (index % 2 === 0 ? 2 : -2)
            }}
            whileTap={{ cursor: 'grabbing', scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute top-0 w-full max-w-sm md:max-w-md h-[400px] md:h-[500px] rounded-[2rem] shadow-2xl overflow-hidden origin-bottom bg-white border border-gray-200"
        >
            {/* Card Content (Monochromatic) */}
            <div className="w-full h-full p-8 flex flex-col justify-between relative bg-white">

                {/* Subtle Grain or Texture could go here, but keeping it clean white for now */}

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100">
                            <data.icon size={28} />
                        </div>
                        <div className="text-5xl font-bold text-gray-100 font-mono">0{data.id}</div>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {data.title}
                    </h3>
                    <p className="text-lg text-gray-500 leading-relaxed font-medium">
                        {data.desc}
                    </p>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-bold uppercase tracking-widest group">
                        Swipe to Launch
                        <ArrowRight size={16} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

const LaunchSteps = () => {
    const initialCards = [
        {
            id: 1,
            title: "Localized Contract Generation",
            desc: "Input details. We instantly generate locally compliant agreements tailored to regional laws.",
            icon: FileText
        },
        {
            id: 2,
            title: "Secure Candidate Onboarding",
            desc: "Candidates self-onboard via secure portal. Identity verification and tax forms handled automatically.",
            icon: UserCheck
        },
        {
            id: 3,
            title: "Compliance Activation",
            desc: "KOMP validates inputs, applies local rules, and activates the compliant contract within minutes.",
            icon: Rocket
        }
    ];

    const [cards, setCards] = useState(initialCards);
    const [swiped, setSwiped] = useState([]);

    const handleSwipe = (id) => {
        setCards(prev => prev.filter(c => c.id !== id));
        setSwiped(prev => [...prev, id]);
    };

    const resetDeck = () => {
        setCards(initialCards);
        setSwiped([]);
    };

    return (
        <section className="pt-24 pb-40 bg-gradient-to-b from-[#F9FAFB] to-white overflow-hidden min-h-[0] flex flex-col items-center justify-center relative z-0">

            <div className="text-center mb-12 relative z-10 px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Built for Speed.</h2>
                <p className="text-gray-500 text-lg">Engineered for Compliance.</p>
            </div>

            <div className="relative w-full max-w-sm md:max-w-md h-[400px] md:h-[500px]">
                <AnimatePresence>
                    {cards.map((card, index) => (
                        <Card
                            key={card.id}
                            data={card}
                            index={index}
                            active={index === 0}
                            onSwipe={handleSwipe}
                        />
                    ))}
                </AnimatePresence>

                {/* Empty State / Reset */}
                {cards.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white rounded-[2rem] border border-gray-200 shadow-xl"
                    >
                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-500">
                            <Rocket size={40} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">All Systems Go!</h3>
                        <p className="text-gray-500 mb-8">Your expansion strategy is ready for deployment.</p>
                        <button
                            onClick={resetDeck}
                            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <RefreshCcw size={18} /> Replay Sequence
                        </button>
                    </motion.div>
                )}
            </div>

        </section>
    );
};

export default LaunchSteps;
