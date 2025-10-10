import { motion } from 'framer-motion';
import { Terminal, Quote } from 'lucide-react';

const recommendations = [
  {
    name: 'Matthew Bell',
    text: 'I worked alongside Amer on a recent app project. It was Amer\'s responsibility to develop my UI designs into a functional product, which he did to a very high standard. Amer is highly skilled, knowledgeable, and passionate about what he does. He\'s always willing to help and takes the time to listen, learn, and also share his knowledge with others. I enjoyed working with Amer and I\'m happy to recommend him to others.',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQGYfb0K2qdL4A/profile-displayphoto-shrink_200_200/B4EZXRolHBHUAY-/0/1742978833699?e=1762992000&v=beta&t=uiL3LDyAhofk14-WUCUzdjUkQLvNWTXznN4wGRMfna0'
  },
  {
    name: 'Can Ertaş',
    text: 'I have worked with many developers in my career. Amer was one of the best amongst them. His motto is "Everything is possible!" This explains a lot about his approach to the problems that we have faced. Amer was always a great asset to our team. Working with him in the same team was giving me the confidence that we can achieve the goals and do anything that the project needed. We weren\'t only trying to solve the problems we have currently but what we possibly have in the future. I feel lucky to work with him and highly recommend him as a lead FE developer if you need one.',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQEsuhhN5tcrjA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699720740365?e=1762992000&v=beta&t=XYTygDBh4mm2Cb02G5Rm5UsgkxA_3UXbdZL9SPe0Spc'
  },
  {
    name: 'Lucy Paine',
    text: 'I worked with Amer on a project for a period of months, Amer was a delight to work with. He has a can do, positive attitude, he\'s very knowledgeable, and his communication skills are excellent. I would highly recommend Amer, his super positive attitude to life will bring light into any work place or team.',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQHMpycBt14TyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690382467814?e=1762992000&v=beta&t=61aru4nU_a_YfybWxZuGSBoR3FIsHWcdj8EnVRI-QdY'
  }
];

export function Recommendations() {
  return (
    <section id="recommendations" className="py-20 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold glow-text-subtle">
              <span className="text-muted-foreground">//</span> LinkedIn Recommendations
            </h2>
          </div>

          {/* Recommendations grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {recommendations.map((rec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,102,0.1)] relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(rec.name) + '&background=00ff66&color=1c1c1c&size=128';
                    }}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-primary">{rec.name}</h3>
                    <p className="text-sm text-muted-foreground">LinkedIn Colleague</p>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed text-sm italic">
                  "{rec.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
