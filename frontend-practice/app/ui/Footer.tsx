import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col justify-between bg-gray-800 text-white text-center h-screen px-24 py-14">
            <div className='flex gap-10 justify-between '>
                <div className='flex flex-col items-start gap-2'>
                    <h4 className='text-xl uppercase font-semibold pb-4'>For artists</h4>
                    <p className='text-lg'>For Artists</p>
                    <p className='text-lg'>How it Works</p>
                    <p className='text-lg'>Artist Toolkit</p>
                    <p className='text-lg'>Referral Program</p>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <h4 className='text-xl uppercase font-semibold pb-4'>FOR FANS</h4>
                    <p className='text-lg'>For Fans</p>
                    <p className='text-lg'>Records</p>
                    <p className='text-lg'>Cassettes</p>
                    <p className='text-lg'>Stories</p>
                    <p className='text-lg'>Qrates Curated</p>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <h4 className='text-xl uppercase font-semibold pb-4'>Our company</h4>
                    <p className='text-lg'>About Qrates</p>
                    <p className='text-lg'>Careers</p>
                    <p className='text-lg'>Partners</p>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <h4 className='text-xl uppercase font-semibold pb-4'>Help</h4>
                    <p className='text-lg'>Support Center</p>
                    <p className='text-lg'>Contact US</p>
                    <p className='text-lg'>Returns</p>
                    <p className='text-lg'>Shipping</p>
                </div>
                <div></div>
            </div>
            <div className="flex justify-between">
                <Image src="/qrates-footer.svg" alt="Qrates Logo" width={400} height={100} />
                <div className='flex gap-4 flex-col items-end'>
                    <h4 className='text white border-white border-2 px-6 py-2'>English</h4>
                    <Image src="/logos.png" alt="Qrates Logo" width={150} height={100} />
                    <div className='flex gap-4'>
                        <p className=''>Terms of Service</p>
                        <p className=''>Privacy Policy</p>
                        <p className=''>Legal Information</p>
                        <p >© TDMS inc</p>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
