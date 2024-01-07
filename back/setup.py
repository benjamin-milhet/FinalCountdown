from setuptools import setup, find_packages

setup(
    # Nom de votre package
    name='the_final_countdown',

    # Version de votre package
    version='1.0.0',

    # Une description courte
    description='API The Final Countdown',

    # URL du dépôt (si applicable)
    url='https://github.com/benjamin-milhet/FinalCountdown',

    # Trouver automatiquement tous les sous-packages
    packages=find_packages(),

    # Dépendances requises pour faire fonctionner l'application
    install_requires=[
        'flask',
        'flask_cors',
    ],

    # Informations supplémentaires
    author='Benjamin MILHET et Marcelo LOPES',

    # Classificateurs pour donner des informations supplémentaires
    classifiers=[
        'Development Status :: 3 - Alpha',  # ou '5 - Production/Stable' si applicable
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',  # ou la licence que vous utilisez
        'Programming Language :: Python :: 3',  # ou une autre version de Python si applicable
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        # Ajoutez d'autres versions si nécessaire
    ],
)

