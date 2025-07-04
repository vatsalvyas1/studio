import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Paintbrush, Code, Database, ShieldCheck } from 'lucide-react';
import { AnimatedElement } from '@/components/animated-element';

const services = [
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: 'Web Design',
    description: 'Creating beautiful, intuitive, and user-friendly interfaces that captivate your audience.',
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Development',
    description: 'Building robust and scalable websites with the latest technologies for optimal performance.',
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: 'Hosting Solutions',
    description: 'Reliable, secure, and high-speed hosting to ensure your website is always available.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Maintenance',
    description: 'Ongoing support and updates to keep your website secure and running smoothly.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We offer a complete suite of services to bring your digital vision to life.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedElement key={service.title} delay={index * 150}>
              <Card className="text-center h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-accent/5">
                <CardHeader>
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
