import React from 'react';
import AWSCertificate from '../../assets/AWSCertificate.png';
import MongodbCertificate from '../../assets/MongodbCertificate.png';
import GradleCertificate from '../../assets/GradleCertificate.png';

const certifications = [
  {
    name: "AWS Cloud Foundations",
    image: AWSCertificate,
    link: "https://www.credly.com/badges/c203200e-ba86-49c2-801a-65b503dcb69d/public_url",
  },
  {
    name: "MongoDB Associate Developer",
    image: MongodbCertificate,
    link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/5819416a-0b3c-4e22-8dfb-220ccdf644ac-ashish-vaghela-9cf8fc50-58af-4735-9058-32bfdd9097b3-certificate.pdf",
  },
  {
    name: "Gradle Build Caching",
    image: GradleCertificate,
    link: "https://dpeuniversity.gradle.com/app/certificate/ce3034e4-633b-44f4-ae8e-434feb0cafc5",
  },
];

function CertificationCard({ cert }) {
  return (
      <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300"
      >
        <img
            src={cert.image}
            alt={cert.name}
            width="150"
            height="150"
            className="border-2 border-gray-400 rounded-lg shadow-md"
            style={{ objectFit: 'contain' }}
        />
        <span className="text-lg font-medium text-center">{cert.name}</span>
      </a>
  );
}

function Certifications() {
  return (
      <div className="mt-8 px-6">
        <h3 className="text-xl font-bold mb-6 text-center">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      </div>
  );
}

export default Certifications;
