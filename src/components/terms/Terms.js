import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import TermsOfServices from './TermsOfServices';

function Terms() {
    const { theme } = useContext(ThemeContext);

    // Define theme-based styles
    const themeStyles = {
      'light-theme': {
        container: 'bg-gray-100 text-gray-900',
        heading: 'text-2xl font-bold mb-2',
        text: 'text-gray-700',
      },
      'dark-theme': {
        container: 'bg-gray-900 text-gray-100',
        heading: 'text-2xl font-bold mb-2 text-white',
        text: 'text-gray-300',
      },
      'blue-theme': {
        container: 'bg-blue-900 text-white',
        heading: 'text-2xl font-bold mb-2 text-blue-300',
        text: 'text-blue-200',
      },
      'green-theme': {
        container: 'bg-green-900 text-white',
        heading: 'text-2xl font-bold mb-2 text-green-300',
        text: 'text-green-200',
      },
    };

    const currentThemeStyle = themeStyles[theme] || themeStyles['light-theme'];

  return (
    <>
    <section className={`p-6 rounded-md shadow-md ${currentThemeStyle.container}`}>
      <h2 className={currentThemeStyle.heading}>Leve Terms of Service</h2>
      <p className={currentThemeStyle.text}>
        This policy was last updated October 01, 2025.
      </p>
    </section>
        <section>
            <div>
                <img src='https://templates.envytheme.com/leve/default/assets/img/privacy-policy.jpg' alt='_terms'/>
            </div>
        </section>

        <TermsOfServices />
    </>
  )
}

export default Terms