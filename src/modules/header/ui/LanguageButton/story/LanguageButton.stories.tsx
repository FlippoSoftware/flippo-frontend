import { $language, changeLanguageFx } from '@settings/i18next';
import { type Meta, type StoryObj } from '@storybook/react';
import { useUnit } from 'effector-react';
import { type TInternationalizationLocales } from 'src/settings/i18next/i18next.constants';

import LanguageButton from '../ui/LanguageButton';

const meta: Meta<typeof LanguageButton> = {
  argTypes: {
    language: { control: false, description: 'Current language' },
    onLanguageSwitch: { control: false, description: 'Language change function', type: 'function' }
  },
  component: LanguageButton,
  title: 'Modules/Header/ui/LanguageButton'
};

export default meta;

type LanguageButtonStory = StoryObj<typeof LanguageButton>;

export const Default: LanguageButtonStory = {
  render: () => <WithProps />
};

function WithProps() {
  const [language, changeLanguage] = useUnit([$language, changeLanguageFx]);

  const onChangeLanguage = () => {
    changeLanguage(language === 'ru' ? 'en' : 'ru').catch(() => console.log('Failed switched'));
  };

  return (
    <LanguageButton language={(language as TInternationalizationLocales) || 'en'} onLanguageSwitch={onChangeLanguage} />
  );
}
