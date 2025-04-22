const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://04092000f.github.io',
  title: 'FH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sayyed Furqan Hussain',
  role: 'AI and Computer Vision Engineer',
  description:
    'A Computer Vision Engineer with 2 years of experience. My work lies in leveraging technology to solve real-world problems through innovative computer vision and machine learning techniques.',
  resume: 'https://drive.google.com/file/d/14leURpKMhpOlCTbbfcaymBTAOrciwC53/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/furqansa344/',
    github: 'https://github.com/04092000f',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'LicensePlateFinder',
    description:
      'LicensePlateFinder is a Computer Vision project designed to detect and locate vehicle license plates in images or videos.',
    stack: ['Computer Vision', 'Deep Learning', 'PyTorch', 'Object Detection'],
    sourceCode: 'https://github.com/04092000f/LicensePlateFinder',
  },
  {
    name: 'CatDogPandaClassifier',
    description:
      'A deep learning model built from scratch to classify images of cats, dogs, and pandas.',
    stack: ['Computer Vision', 'Deep Learning', 'PyTorch', 'Image Classification', 'Convolutional Neural Networks'],
    sourceCode: 'https://github.com/04092000f/CatDogPandaClassifier',
  },
  {
    name: 'BallTrackr',
    description:
      'BallTrackr is an advanced video application designed to detect and track a soccer ball in real-time using YOLOV3 and KCF Tracker.',
    stack: ['Computer Vision', 'OpenCV', 'Object Detection', 'Object Tracking'],
    sourceCode: 'https://github.com/04092000f/BallTrackr',
  },
  {
    name: 'ArtifyLens',
    description:
      'ArtifyLens is a project that has implemented parts of a selfie app such as filters like pencil-sketch and cartoonify, blemish removal and chroma keying.',
    stack: ['Computer Vision', 'OpenCV'],
    sourceCode: 'https://github.com/04092000f/ArtifyLens',
  },
  {
    name: 'ForestMonitor',
    description:
      'ForestMonitor is a tool that detects and analyzes deforested areas in satellite images using HSV color segmentation.',
    stack: ['Computer Vision', 'OpenCV'],
    sourceCode: 'https://github.com/04092000f/ForestMonitor',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'OpenCV',
  'Pytorch',
  'Tensorflow',
  'NumPy',
  'Pandas',
  'SicPy',
  'Sklearn',
  'Matplotlib',
  'Django',
  'Flask',
  'Streamlit',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'furqansa344@gmail.com',
}

export { header, about, projects, skills, contact }
