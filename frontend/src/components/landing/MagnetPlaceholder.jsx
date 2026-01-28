import React from 'react';
import Button from './Button';

const MagnetPlaceholder = () => {
    return (
        <section className="py-24 bg-surface border-y border-black">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto bg-white border border-black p-12 relative shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-black mb-6">
                            Compliance.Map
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Select a jurisdiction to view active hiring rules.
                        </p>

                        <div className="h-64 bg-gray-50 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center mb-8 gap-4">
                            <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
                                <span className="text-xl text-gray-400">?</span>
                            </div>
                            <span className="text-gray-400 font-mono text-xs uppercase">Interactive Component Placeholder</span>
                        </div>

                        <Button variant="outline">
                            Load Full Guide
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MagnetPlaceholder;
