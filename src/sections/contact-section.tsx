'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'
import GetInTouch from '@/components/contact/GetInTouch'


const ContactSection = () => {
  return (
    <section
      style={{ minHeight: "100vh" }}
      id="contact"
    >
      <GetInTouch />
    </section>
  )
}

export default ContactSection
