import React, { useState } from 'react';
import './CertificatesScreen.css';

interface Certificate {
    id: string;
    src: string;
    alt: string;
}

const certificatesList: Certificate[] = [
    { id: '1', src: 'certificates-testmonials/1765285922560-5fe0b30a-3e00-4ddf-a2eb-88136d50d74d_1.png', alt: 'Certificate 1' },
    { id: '2', src: 'certificates-testmonials/2018_edusave.png', alt: '2018 Edusave' },
    { id: '3', src: 'certificates-testmonials/2019_edusave.png', alt: '2019 Edusave' },
    { id: '4', src: 'certificates-testmonials/2019_edusave_bursary.png', alt: '2019 Edusave Bursary' },
    { id: '5', src: 'certificates-testmonials/2021_Edusave_Award.jpg', alt: '2021 Edusave Award' },
    { id: '6', src: 'certificates-testmonials/2023_TTT_CERTIFICATE_DANIELLA HAN XUE EN.jpg', alt: 'TTT Certificate' },
    { id: '7', src: 'certificates-testmonials/Carddio_Testimonial.jpg', alt: 'Carddio Testimonial' },
    { id: '8', src: 'certificates-testmonials/IMDA-Solid-pods.png', alt: 'IMDA Solid Pods' },
    { id: '9', src: 'certificates-testmonials/ITE_Directors_list.jpg', alt: 'ITE Directors List' },
    { id: '10', src: 'certificates-testmonials/ITE_Testimonial.png', alt: 'ITE Testimonial' },
    { id: '11', src: 'certificates-testmonials/ITSIG_Letter_of_Appointment.jpg', alt: 'ITSIG Letter of Appointment' },
    { id: '12', src: 'certificates-testmonials/KOSEN_Certificate_of_Completion.jpg', alt: 'KOSEN Certificate of Completion' },
    { id: '13', src: 'certificates-testmonials/KOSEN_Most_Feasible_Award.jpg', alt: 'KOSEN Most Feasible Award' },
    { id: '14', src: 'certificates-testmonials/MISSION_X.jpg', alt: 'Mission X' },
    { id: '15', src: 'certificates-testmonials/SANA_Certificate.jpg', alt: 'SANA Certificate' },
    { id: '16', src: 'certificates-testmonials/all-rounder.png', alt: 'All Rounder' },
    { id: '17', src: 'certificates-testmonials/aws-cloud-practicioner.png', alt: 'AWS Cloud Practitioner' },
    { id: '18', src: 'certificates-testmonials/prudential_pyi.png', alt: 'Prudential PYI' },
    { id: '19', src: 'certificates-testmonials/sjc-testimonial.png', alt: 'SJC Testimonial' },
];

export const CertificatesScreen: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="certificates-screen">
            <div className="certificates-content">
                <h1 className="certificates-title">Certificates & Testimonials</h1>
                <p className="certificates-subtitle">
                    A collection of my achievements, awards, and testimonials.
                </p>

                <div className="certificates-marquee">
                    <div className="certificates-track">
                        {/* Double the list to create seamless infinite scroll */}
                        {[...certificatesList, ...certificatesList].map((cert, index) => (
                            <div
                                key={`${cert.id}-${index}`}
                                className="certificate-item"
                                onClick={() => setSelectedImage(cert.src)}
                            >
                                <img src={cert.src} alt={cert.alt} loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className={`modal-overlay ${selectedImage ? 'active' : ''}`}
                onClick={() => setSelectedImage(null)}
            >
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {selectedImage && (
                        <>
                            <button className="modal-close" onClick={() => setSelectedImage(null)}>
                                &times;
                            </button>
                            <img src={selectedImage} alt="Certificate Full View" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
