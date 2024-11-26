const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://04092000f.github.io/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sayyed Furqan Hussain',
  role: 'Computer Vision Engineer',
  description:
    'A Computer Vision Engineer with 1.5 years of experience. My work lies in leveraging technology to solve real-world problems through innovative computer vision and machine learning techniques.',
  resume: 'app.resumai.com/s/iYWTLFqhXQPKsMmhcVfk',
  social: {
    linkedin: 'https://www.linkedin.com/in/sayyed-furqan-hussain-6b31071a6/',
    github: 'https://github.com/04092000f',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'LicensePlateFinder',
    description:
      'LicensePlateFinder is a computer vision project designed to detect and locate vehicle license plates in images or videos.',
    stack: ['Computer Vision', 'Deep Learning', 'Pytorch', 'Object Detection'],
    sourceCode: 'https://github.com/04092000f/LicensePlateFinder',
    livePreview: 'https://example.com'
  },
    {
    name: 'CatDogPandaClassifier',
    description:
      'A deep learning model built from scratch to classify images of cats, dogs, and pandas.',
    stack: ['Computer Vision', 'Deep Learning', 'Pytorch', 'Image Classification', 'Convolutional Neural Networks'],
    sourceCode: 'https://github.com/04092000f/CatDogPandaClassifier',
    livePreview: 'https://example.com'
  },
  {
    name: 'BallTrackr',
    description:
      'BallTrackr is an advanced video application designed to detect and track a soccer ball in real-time using YOLOV3 and KCF Tracker.',
    stack: ['Computer Vision', 'OpenCV', 'Object Detection', 'Object Tracking'],
    sourceCode: 'https://github.com/04092000f/BallTrackr',
    livePreview: 'https://example.com'
  }
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
  'Scipy',
  'cikit-Learn',
  'Matplotlib',
  'Django',
  'Flask',
  'Streamlit'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'furqansa344@gmail.com',
}

export { header, about, projects, skills, contact }
