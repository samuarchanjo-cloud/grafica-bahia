'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, ChevronRight } from 'lucide-react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import logoMegaColor from './assets/logo-mega-color.png';
import adesivoPerfurado from '../servicos-oferecidos/adesivo-perfurado.png';
import adesivosDeVinil from '../servicos-oferecidos/adesivos-de-vinil.png';
import cartaoDeVisita from '../servicos-oferecidos/cartao-de-visita.png';
import fachadasEmAcm from '../servicos-oferecidos/fachadas-em-acm.png';
import instalacaoDeBanner from '../servicos-oferecidos/instalacao-de-banner.png';
import letrasEmAltoRelevo from '../servicos-oferecidos/letras-em-alto-relevo.png';
import placasDirecionais from '../servicos-oferecidos/placas-direcionais.png';

const GraficaMegaColorSite = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const services = [
    {
      id: 1,
      title: 'Adesivos & Impressão',
      description: 'Impressão digital de alta qualidade em diversos materiais',
      icon: '🖨️',
    },
    {
      id: 2,
      title: 'Letreiros ACM',
      description: 'Letras em alto relevo com acabamento premium',
      icon: '📝',
    },
    {
      id: 3,
      title: 'Fachadas & Lonas',
      description: 'Soluções completas para sua fachada e banners',
      icon: '🏢',
    },
    {
      id: 4,
      title: 'Placas & Cavaletes',
      description: 'Signagem profissional para pontos de venda',
      icon: '📍',
    },
  ];

  const portfolio = [
    { id: 1, title: 'Fachadas em ACM', category: 'Fachadas', image: fachadasEmAcm },
    { id: 2, title: 'Adesivos de Vinil', category: 'Adesivos', image: adesivosDeVinil },
    { id: 3, title: 'Instalação de Banner', category: 'Lonas', image: instalacaoDeBanner },
    { id: 4, title: 'Letras em Alto Relevo', category: 'Letreiros', image: letrasEmAltoRelevo },
    { id: 5, title: 'Adesivo Perfurado', category: 'Adesivos', image: adesivoPerfurado },
    { id: 6, title: 'Placas Direcionais', category: 'Placas', image: placasDirecionais },
    { id: 7, title: 'Cartão de Visitas', category: 'Identidade Visual', image: cartaoDeVisita },
  ];

  const features = [
    {
      title: 'Alta Qualidade',
      description: 'Impressão digital de alta resolução com cores vibrantes',
      icon: '✨',
    },
    {
      title: 'Atendimento Ágil',
      description: 'Seg-Sex 09:00-19:00 com resposta rápida a orçamentos',
      icon: '⚡',
    },
    {
      title: 'Soluções Personalizadas',
      description: 'Projetos customizados para sua marca e necessidades',
      icon: '🎨',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5521965249730?text=Olá%20Gráfica%20Mega%20Color,%20gostaria%20de%20solicitar%20um%20orçamento"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl z-40 transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={28} className="text-white" />
      </a>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-20">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <motion.circle
              cx="200"
              cy="150"
              r="100"
              fill="#E91E8C"
              animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.polygon
              points="1000,100 1100,250 900,250"
              fill="#00A9E0"
              animate={{ y: [0, -30, 0], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.rect
              x="600"
              y="500"
              width="150"
              height="150"
              fill="#FFED00"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
          </svg>
        </motion.div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
<motion.div
  className="mb-8"
  variants={itemVariants}
  animate={{ scale: [1, 1.04, 1] }}
  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
>
  <img
    src={logoMegaColor}
    alt="Logo Gráfica Mega Color"
    className="w-52 md:w-[300px] h-auto mx-auto"
  />
</motion.div>

          {/* Tagline */}
          <motion.p
            className="text-sm uppercase tracking-[3px] text-gray-400 mb-4"
            variants={itemVariants}
          >
            Gráfica Especializada
          </motion.p>

          {/* Main Heading */}
          <motion.h1 className="text-6xl md:text-7xl font-bold mb-6" variants={itemVariants}>
            <span className="text-white">Mega</span>
            <span className="bg-gradient-to-r from-[#E91E8C] via-[#FFED00] to-[#00A9E0] bg-clip-text text-transparent">
              {' '}
              Color
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p className="text-xl md:text-2xl text-gray-300 mb-8" variants={itemVariants}>
            Soluções em Impressão Digital
          </motion.p>

          {/* Description */}
          <motion.p className="text-lg text-gray-400 mb-12 max-w-2xl" variants={itemVariants}>
            Impressão digital de alta qualidade, ACM, lonas, adesivos e letreiros para sua marca
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <a
              href="#contact"
              className="group px-8 py-4 bg-[#E91E8C] hover:bg-[#d41877] rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#E91E8C]/50 flex items-center justify-center gap-2"
            >
              Solicitar Orçamento
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/grafica_mega_color"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-600 hover:border-[#E91E8C] rounded-lg font-bold text-lg transition-all duration-300"
            >
              Ver Portfólio
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 md:py-32 px-6 bg-black relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Nossos <span className="text-[#E91E8C]">Serviços</span>
            </h2>
            <p className="text-xl text-gray-400">Soluções completas em impressão digital</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                className="group cursor-pointer"
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -8 }}
              >
                <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 group-hover:border-[#E91E8C] transition-all duration-300 h-full">
                  <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Trabalhos <span className="text-[#00A9E0]">Recentes</span>
            </h2>
            <p className="text-xl text-gray-400 mb-4">Conheça alguns dos nossos projetos realizados</p>
            <p className="text-gray-500">
              2.970 seguidores no Instagram •{' '}
              <a
                href="https://www.instagram.com/grafica_mega_color"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E91E8C] hover:underline"
              >
                @grafica_mega_color
              </a>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, idx) => (
              <motion.div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-xl"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full h-64 bg-gradient-to-br from-[#E91E8C] to-[#00A9E0] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="text-center">
                      <p className="text-white font-bold text-lg">{item.title}</p>
                      <p className="text-[#FFED00] text-sm mt-2">{item.category}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 md:py-32 px-6 bg-black">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Por Que <span className="text-[#FFED00]">Escolher</span> a Mega Color
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Categorias de <span className="text-[#E91E8C]">Produtos</span>
            </h2>
            <p className="text-xl text-gray-400">Confira nossas principais linhas</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Fachada em ACM',
              'Panfletos',
              'Adesivos',
              'Adesivo Perfurado',
              'Cavaletes',
              'Lonas',
              'Letras em Alto Relevo',
              'Placas em ACM',
            ].map((product, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-gray-800/50 hover:bg-gray-700 border border-gray-700 rounded-lg text-center cursor-pointer transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-white font-semibold">{product}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-400 mt-8 text-lg"
            variants={itemVariants}
          >
            Preços sob consulta. Solicite seu orçamento personalizado.
          </motion.p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-32 px-6 bg-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600">
            <circle cx="100" cy="100" r="80" fill="#E91E8C" />
            <polygon points="1100,500 1200,600 1000,600" fill="#00A9E0" />
          </svg>
        </div>

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Entre em <span className="text-[#00A9E0]">Contato</span>
            </h2>
            <p className="text-xl text-gray-400">Solicite seu orçamento agora</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              variants={itemVariants}
            >
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-4 bg-[#E91E8C]/20 rounded-lg group-hover:bg-[#E91E8C]/40 transition-colors">
                  <MapPin className="text-[#E91E8C]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Endereço</h3>
                  <p className="text-gray-400">
                    Av. Eng. Souza Filho, 1133<br />
                    Jacarepaguá, Rio de Janeiro - RJ<br />
                    22753-039
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-4 bg-[#00A9E0]/20 rounded-lg group-hover:bg-[#00A9E0]/40 transition-colors">
                  <Phone className="text-[#00A9E0]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Telefone</h3>
                  <a href="tel:+5521965249730" className="text-gray-400 hover:text-[#00A9E0] transition-colors">
                    (21) 96524-9730
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="p-4 bg-[#FFED00]/20 rounded-lg group-hover:bg-[#FFED00]/40 transition-colors">
                  <Clock className="text-[#FFED00]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Horário de Funcionamento</h3>
                  <p className="text-gray-400">
                    Segunda a Sexta: 09:00 - 19:00<br />
                    Sábado, Domingo: Fechado
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/grafica_mega_color"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800 hover:bg-[#E91E8C] rounded-lg transition-colors"
                  >
                    <FaInstagram className="text-white text-2xl" />
                  </a>
                  <a
                    href="https://www.facebook.com/megacolorgraficarapida/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800 hover:bg-[#00A9E0] rounded-lg transition-colors"
                  >
                    <span className="text-white text-2xl font-bold">f</span>
                  </a>  
                  <a
                    href="https://wa.me/5521965249730?text=Olá%20Gráfica%20Mega%20Color,%20gostaria%20de%20solicitar%20um%20orçamento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-800 hover:bg-green-500 rounded-lg transition-colors"
                  >
                    <MessageCircle className="text-white" size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col gap-6 justify-center"
              variants={itemVariants}
            >
              <a
                href="https://wa.me/5521965249730?text=Olá%20Gráfica%20Mega%20Color,%20gostaria%20de%20solicitar%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-6 bg-green-500 hover:bg-green-600 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} />
                Enviar Mensagem no WhatsApp
              </a>

              <a
                href="tel:+5521965249730"
                className="group px-8 py-6 bg-[#00A9E0] hover:bg-blue-600 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#00A9E0]/50 flex items-center justify-center gap-3"
              >
                <Phone size={24} />
                Ligar Agora
              </a>

              <a
                href="https://www.instagram.com/grafica_mega_color"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-6 bg-[#E91E8C] hover:bg-pink-700 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#E91E8C]/50 flex items-center justify-center gap-3"
              >
                <FaInstagram className="text-white text-2xl" />
                Seguir no Instagram
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Avaliações e <span className="text-[#FFED00]">Comentários</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 bg-gray-800/50 border border-gray-700 rounded-xl"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-[#E91E8C]">2.6</div>
                <div>
                  <p className="text-white font-bold">Google Business</p>
                  <p className="text-yellow-400">⭐⭐⭐ (5 avaliações)</p>
                </div>
              </div>
              <p className="text-gray-300">
                "A Gráfica Mega Color é especializada em impressão digital de alta qualidade, atendendo clientes em todo o Rio de Janeiro."
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-gray-800/50 border border-gray-700 rounded-xl"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-[#00A9E0]">5.0</div>
                <div>
                  <p className="text-white font-bold">Facebook</p>
                  <p className="text-yellow-400">⭐⭐⭐⭐⭐ (4 votos)</p>
                </div>
              </div>
              <p className="text-gray-300">
                Excelente atendimento, qualidade de produto de primeira linha e prazos mantidos!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 px-6 py-12 bg-black">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold mb-4">Gráfica Mega Color</h3>
              <p className="text-gray-400 text-sm">Soluções em impressão digital premium</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#E91E8C] transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-[#E91E8C] transition-colors">Portfólio</a></li>
                <li><a href="#contact" className="hover:text-[#E91E8C] transition-colors">Contato</a></li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold mb-4">Contato</h3>
              <p className="text-gray-400 text-sm">(21) 96524-9730</p>
              <p className="text-gray-400 text-sm">Seg-Sex 09:00-19:00</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/grafica_mega_color" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E91E8C]">Instagram</a>
                <a href="https://www.facebook.com/megacolorgraficarapida/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00A9E0]">Facebook</a>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Gráfica Mega Color. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com ❤️ para sua marca</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default GraficaMegaColorSite;
