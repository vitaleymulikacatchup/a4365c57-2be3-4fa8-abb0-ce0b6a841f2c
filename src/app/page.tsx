"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Award, Globe, Heart, Sparkles, Zap, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="dotGrid"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Brew Haven"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764837534238-46vdgrc8.jpg"
          logoAlt="Brew Haven logo"
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="BREW HAVEN"
          description="Craft coffee experience in every cup. Freshly roasted beans, expertly brewed beverages, and warm hospitality."
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Visit Us", href: "contact" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764837535745-8pb6av83.jpg",
              imageAlt: "Freshly made latte with latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764837537063-zx6jusir.jpg",
              imageAlt: "Expert barista crafting espresso"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764837538320-86slwjlx.jpg",
              imageAlt: "Cozy coffeeshop interior ambiance"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Brewing Excellence Since 2015. We believe great coffee brings communities together."
          metrics={[
            { icon: Coffee, label: "Daily Customers", value: "500+" },
            { icon: Award, label: "Specialty Drinks", value: "45+" },
            { icon: Globe, label: "Premium Origins", value: "12" },
            { icon: Heart, label: "Community Events", value: "Monthly" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardTwo
          title="Our Menu"
          description="Discover our carefully curated selection of artisan coffees and specialty beverages"
          tag="Signature Drinks"
          tagIcon={Sparkles}
          features={[
            {
              title: "Cappuccino",
              description: "Classic blend of espresso, steamed milk, and rich foam. Smooth and creamy.",
              icon: Coffee
            },
            {
              title: "Americano",
              description: "Bold and robust espresso shots with hot water for a full-bodied coffee experience.",
              icon: Zap
            },
            {
              title: "Latte",
              description: "Velvety smooth espresso combined with steamed milk and a light layer of foam.",
              icon: Coffee
            },
            {
              title: "Specialty Drinks",
              description: "Seasonal creations and house favorites. Ask our baristas for recommendations.",
              icon: Sparkles
            }
          ]}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from the Brew Haven community"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Manager",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764837542944-o50e6w0h.jpg"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Freelancer",
              company: "Creative Studio",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764837544004-trkoarb9.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Student",
              company: "Local University",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764837545210-5i97gxo8.jpg"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Owner",
              company: "Local Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764837546586-u1whh1hh.jpg"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated"
          description="Subscribe to get special offers, new drink recipes, and event announcements delivered to your inbox."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_36N98T78GiMXZxciGAJmSwlCklc/uploaded-1764837548005-w0d6uyrm.jpg"
          imageAlt="Cozy coffeeshop seating area"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Brew Haven"
          copyrightText="© 2025 Brew Haven Coffee. All rights reserved."
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Monday - Friday", href: "#" },
                { label: "6:00 AM - 8:00 PM", href: "#" },
                { label: "Saturday - Sunday", href: "#" },
                { label: "7:00 AM - 9:00 PM", href: "#" }
              ]
            },
            {
              title: "Follow Us",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            },
            {
              title: "Location",
              items: [
                { label: "123 Coffee Street", href: "#" },
                { label: "Downtown District", href: "#" },
                { label: "Call: (555) 123-4567", href: "tel:5551234567" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}