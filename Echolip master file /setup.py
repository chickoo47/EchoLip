from setuptools import setup

setup(name='lipnet',
    version='0.1.6',
    packages=['lipnet'],
    zip_safe=False,
	install_requires=[
        'Keras==2.0.2',
        'editdistance==0.3.1',
		'h5py==2.6.0',
		'matplotlib==2.0.0',
		'numpy==1.12.1',
		'python-dateutil==2.6.0',
		'scipy==0.19.0',
		'Pillow==4.1.0',
		'tensorflow-gpu==1.0.1',
		'Theano==0.9.0',
        'nltk==3.2.2',
        'sk-video==1.1.7',
        'dlib==19.4.0'
    ])
