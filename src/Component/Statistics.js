import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const statisticsData = [
    { end: 3, label: "Years of Experience" },
    { end: 1000, label: "Vehicle Repaired" },
    { end: 5, label: "Technicians & Workers" },
    { end: 100, label: "Satisfied Customers", suffix: "%" }
];

const Statistics = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        onChange: (inView) => {
            if (inView) setHasAnimated(true);
        }
    });

    return (
        <section className="statistics-section" ref={ref}>
            <div className="statistics-container">
                {statisticsData.map((stat, index) => (
                    <div className="stat-item" key={index}>
                        <h2 className="stat-number">
                            {hasAnimated ? (
                                <CountUp 
                                    end={stat.end} 
                                    duration={2} // Adjust the duration as needed
                                    suffix={stat.suffix}
                                />
                            ) : (
                                stat.number
                            )}
                        </h2>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Statistics;
