export type DemoForm = {
  fullName: string;
  email: string;
  companySize: string;
};

export type DemoErrors = Partial<Record<keyof DemoForm, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FULL_NAME_LENGTH = 100;

export function validateDemoForm(form: DemoForm): DemoErrors {
  const errors: DemoErrors = {};
  const fullName = form.fullName.trim();
  if (fullName.length < 2) {
    errors.fullName = 'Enter your full name.';
  } else if (fullName.length > MAX_FULL_NAME_LENGTH) {
    errors.fullName = 'Shorten your full name to 100 characters.';
  }
  if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = 'Enter a valid work email.';
  }
  if (!form.companySize) {
    errors.companySize = 'Choose your company size.';
  }
  return errors;
}

export function salesCalendarUrl(value: string | undefined = import.meta.env.VITE_SALES_CALENDAR_URL): string | null {
  return value && value.startsWith('https://') ? value : null;
}
