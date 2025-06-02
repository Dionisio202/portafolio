const categories = ['All', 'Web Development', 'Mobile Development', 'Artificial Intelligence'];

const projects = [
  {
    title: 'Organizer',
    description: 'App de gestión y organización de tareas y notas. Permite crear carpetas y notas personalizadas.',
    category: 'Web Development',
    tags: ['React', 'Tailwind', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    github: [
      { label: 'Frontend', url: 'https://github.com/Edison/organizer-frontend' },
      { label: 'Backend', url: 'https://github.com/Edison/organizer-backend' },
    ],
  },
  {
    title: 'Mobile Tasker',
    description: 'Aplicación móvil para la gestión de tareas y recordatorios, sincronizada en la nube.',
    category: 'Mobile Development',
    tags: ['Flutter', 'Firebase'],
    image: '/mobile-tasker.png',
    github: [{ label: 'Repo', url: 'https://github.com/Edison/mobile-tasker' }],
  },
  {
    title: 'AI Chatbot',
    description: 'Chatbot inteligente para atención al cliente y soporte automatizado.',
    category: 'Artificial Intelligence',
    tags: ['Python', 'TensorFlow', 'NLP'],
    image: '/ai-chatbot.png',
    github: [{ label: 'GitHub', url: 'https://github.com/Edison/ai-chatbot' }],
  },
];

export { categories, projects };