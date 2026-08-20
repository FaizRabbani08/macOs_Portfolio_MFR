import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FONT_WEIGHTS = {
    title: {min: 400, max: 900, default: 600},
    subtitle: {min: 100, max: 400, default: 200},
};
const renderText = (text, className, baseWeight = 400) => {
    return text.split('').map((char, index) => (
        <span
            key={index}
            className={className}
            style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));
};

const setupTextHover = (container, type) => {
    if (!container) return () =>{}
    const letters = container.querySelectorAll('span');    
    const { min, max, default: defaultWeight } = FONT_WEIGHTS[type];   

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter,  {
            fontVariationSettings: `"wght" ${weight}`,
            duration: duration,
            ease: "power1.out"
        });
    }

    const handleMouseMove = (e) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter) => {
            const { left: letterLeft, width } = letter.getBoundingClientRect();
            const letterX = letterLeft - left + width / 2;
            const distance = Math.abs(mouseX - letterX);
            const intensity = Math.exp(-(distance ** 2) / 2000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };

    const handleMouseLeave = () =>
        letters.forEach((letter) => animateLetter(letter, defaultWeight, 0.3));

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);

    };
};
const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    
    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, 'title');
        const subtitleCleanup = setupTextHover(subtitleRef.current, 'subtitle');

        gsap.from([titleRef.current, subtitleRef.current], {
            y: 24,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
        });

        return () => {
            subtitleCleanup?.();
            titleCleanup?.();
        };
    }, []);

    return (
        <section id="welcome" className="flex min-h-screen flex-col items-center justify-center">
            <p className="welcome-kicker">MOHAMMAD FAIZ RABBANI / PERSONAL DESKTOP</p>
            <h1 ref={titleRef} className="mb-4 text-center text-4xl font-bold">
                {renderText("Full Stack Developer", "text-7xl font-georama title-text", 700)}
            </h1>
            <p ref={subtitleRef} className="max-w-5xl text-center text-lg text-gray-200">
                {renderText(
                    "Building scalable systems and interactive products with Java, Spring Boot, React, PostgreSQL, and cloud-native architecture.",
                    "text-2xl font-georama subtitle-text",
                    400,
                )}
            </p>
            <div className="small-screen">
                <p>This portfolio is designed to be responsive and works across desktop and mobile.</p>
            </div>
        </section>
    );
};

export default Welcome;
