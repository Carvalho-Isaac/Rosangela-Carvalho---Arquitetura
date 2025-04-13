import React from 'react'
import SvgIcon from './SvgIcon'
// import { GoogleMap } from '@react-google-maps/api'

const ContactSecction = () => {
    return (
        <section className=''>
            <div className="contact-secction">
                <a href="https://maps.app.goo.gl/yRUgUAxZzMVjnVrj8" target="_blank">
                    <SvgIcon iconName="maps" height={15} color='var(--primary-dark-green)'/>
                    <span>Endereço</span>
                    <p>Rua Antônio Marroquim, 673. Baixão, Arapiraca - Alagoas Brasil</p>
                </a>
                <div className=" contact-secction-phones">
                    <a href="tel://+5582999852911" target="_blank">
                        <SvgIcon iconName="phone" height={15} color='var(--primary-dark-green)' />
                        <span>Telefone</span>
                        <p>(82) 9 9985-2911</p>
                    </a>
                    <a href="https://wa.me/5582999852911" target="_blank">
                        <SvgIcon iconName="whatsapp" height={22.5} color='var(--primary-dark-green)' />
                        <span>Whatsapp</span>
                        <p>(82) 9 9985-2911</p>
                    </a>
                </div>
                <a href="mailto:projetosrosangelacarvalho@gmail.com" target="_blank">
                    <SvgIcon iconName="email" height={15} color='var(--primary-dark-green)'/>
                    <span>Email</span>
                    <p>projetosrosangelacarvalho.arq@gmail.com</p>
                </a>
            </div>
            {/* <GoogleMaps /> */}
        </section>
    )
}

export default ContactSecction
