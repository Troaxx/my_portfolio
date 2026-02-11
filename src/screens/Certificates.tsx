import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Certificates.css';

interface Certificate {
    id: string;
    src: string;
    alt: string;
}

// Ported Data
const certificatesList: Certificate[] = [
    { id: '1', src: `${import.meta.env.BASE_URL}certificates-testmonials/1765285922560-5fe0b30a-3e00-4ddf-a2eb-88136d50d74d_1.png`, alt: 'Higher NITEC Certificate' },
    { id: '2', src: `${import.meta.env.BASE_URL}certificates-testmonials/2018_edusave.png`, alt: '2018 Edusave' },
    { id: '3', src: `${import.meta.env.BASE_URL}certificates-testmonials/2019_edusave.png`, alt: '2019 Edusave' },
    { id: '4', src: `${import.meta.env.BASE_URL}certificates-testmonials/2019_edusave_bursary.png`, alt: '2019 Edusave Bursary' },
    { id: '5', src: `${import.meta.env.BASE_URL}certificates-testmonials/2021_Edusave_Award.jpg`, alt: '2021 Edusave Award' },
    { id: '6', src: `${import.meta.env.BASE_URL}certificates-testmonials/2023_TTT_CERTIFICATE_DANIELLA HAN XUE EN.jpg`, alt: 'TTT Certificate' },
    { id: '7', src: `${import.meta.env.BASE_URL}certificates-testmonials/Carddio_Testimonial.jpg`, alt: 'Carddio Testimonial' },
    { id: '8', src: `${import.meta.env.BASE_URL}certificates-testmonials/IMDA-Solid-pods.png`, alt: 'IMDA Solid Pods' },
    { id: '9', src: `${import.meta.env.BASE_URL}certificates-testmonials/ITE_Directors_list.jpg`, alt: 'ITE Directors List' },
    { id: '10', src: `${import.meta.env.BASE_URL}certificates-testmonials/ITE_Testimonial.png`, alt: 'ITE Testimonial' },
    { id: '11', src: `${import.meta.env.BASE_URL}certificates-testmonials/ITSIG_Letter_of_Appointment.jpg`, alt: 'ITSIG Letter of Appointment' },
    { id: '12', src: `${import.meta.env.BASE_URL}certificates-testmonials/KOSEN_Certificate_of_Completion.jpg`, alt: 'KOSEN Certificate of Completion' },
    { id: '13', src: `${import.meta.env.BASE_URL}certificates-testmonials/KOSEN_Most_Feasible_Award.jpg`, alt: 'KOSEN Most Feasible Award' },
    { id: '14', src: `${import.meta.env.BASE_URL}certificates-testmonials/MISSION_X.jpg`, alt: 'Mission X' },
    { id: '15', src: `${import.meta.env.BASE_URL}certificates-testmonials/SANA_Certificate.jpg`, alt: 'SANA Certificate' },
    { id: '16', src: `${import.meta.env.BASE_URL}certificates-testmonials/all-rounder.png`, alt: 'All Rounder' },
    { id: '17', src: `${import.meta.env.BASE_URL}certificates-testmonials/aws-cloud-practicioner.png`, alt: 'AWS Cloud Practitioner' },
    { id: '18', src: `${import.meta.env.BASE_URL}certificates-testmonials/prudential_pyi.png`, alt: 'Prudential PYI' },
    { id: '19', src: `${import.meta.env.BASE_URL}certificates-testmonials/sjc-testimonial.png`, alt: 'SJC Testimonial' },
    { id: '20', src: `${import.meta.env.BASE_URL}certificates-testmonials/NETS-Sandbox.jpg`, alt: 'NETS Sandbox' },
];

export const Certificates: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % certificatesList.length));
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + certificatesList.length) % certificatesList.length));
    };

    // Keyboard Navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') setSelectedIndex(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex]);

    const selectedImage = selectedIndex !== null ? certificatesList[selectedIndex] : null;

    return (
        <div className="revamp-certificates">
            <div className="certificates-container">
                <motion.div
                    className="certificates-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="page-title">Certificates</h1>
                    <p className="page-subtitle">Achievements, Awards & Testimonials</p>
                </motion.div>

                <div className="certificates-grid">
                    {certificatesList.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            className="cert-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <img src={cert.src} alt={cert.alt} loading="lazy" />
                            <div className="cert-overlay">
                                <span>View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedImage && createPortal(
                <div className="modal-overlay" onClick={() => setSelectedIndex(null)}>
                    <button className="nav-btn prev-btn" onClick={handlePrev}>
                        <ArrowBackIosNewIcon fontSize="large" />
                    </button>

                    <div className="modal-content image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedIndex(null)}>
                            <CloseIcon />
                        </button>

                        <img src={selectedImage.src} alt={selectedImage.alt} />

                        <div className="modal-caption">
                            {selectedImage.alt}
                        </div>
                    </div>

                    <button className="nav-btn next-btn" onClick={handleNext}>
                        <ArrowForwardIosIcon fontSize="large" />
                    </button>
                </div>,
                document.body
            )}
        </div>
    );
};
