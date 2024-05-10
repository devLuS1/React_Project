import React from 'react'
import Contact from '../components/Contact/Contact'
import { Helmet } from 'react-helmet'

const ContactPage = () => {
    return (
        <div>
            <Helmet>
                <title>Snow Home | Contact Us</title>
                <meta name='description' content='Contact us with your questions or requests. Discover our store locations and visit us. From sleek lines to luxurious materials, each item is thoughtfully curated to blend seamlessly with your unique style. Explore our range of contemporary furniture and accessories to create a home that exudes sophistication and charm.' />
            </Helmet>
            <Contact />
        </div>
    )
}

export default ContactPage