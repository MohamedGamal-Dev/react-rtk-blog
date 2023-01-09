import { Button, Container, Input } from '@/features/ui';
import { useFormState } from '@/features/utils/use-form-state';
import {
  newsLetterBtnSubmit,
  newsLetterH1,
  newsLetterH2,
  newsLetterInputPlaceholder,
} from './consts';

export const LayoutNewsletter = () => {
  const initialState = {
    newsLetterEmail: '',
  };

  const { elementState, handleFormSubmit, reset, handleOnChange } =
    useFormState(initialState, onFormSubmit);

  function onFormSubmit() {
    console.log(
      elementState!.newsLetterEmail,
      '=== >> News Letter Email SUBMITTED << ==='
    );
    reset();
  }

  return (
    <>
      <div className="flex bg-dark-off p-5">
        <Container
          center
          className="flex flex-col items-center px-6 md:flex-row md:space-y-0 md:space-x-2 sm-only:space-y-4"
        >
          <blockquote className="flex flex-col items-center md:w-1/2">
            <div className="text-3xl font-bold italic text-light-primary md:text-4xl">
              {newsLetterH1}
            </div>
            <div className="text-lg italic text-light-secondary md:text-xl md:font-semibold lg:text-2xl ">
              {newsLetterH2}
            </div>
          </blockquote>

          <form onSubmit={handleFormSubmit} className="md:w-1/2">
            <div className="flex flex-col md:flex-row md:space-x-2 sm-only:space-y-2">
              <Input
                type={'email'}
                name={'newsLetterEmail'}
                value={elementState!.newsLetterEmail}
                onChange={handleOnChange}
                placeholder={newsLetterInputPlaceholder}
                outline
                variant="primary"
                className="rounded-lg"
              />

              <Button className="bg-primary-main text-white  hover:bg-primary-dark hover:shadow-info-dark rounded-lg  px-5 py-2.5 text-center text-lg font-bold  shadow-sm  hover:ring-2 focus:outline-none lg:px-12">
                {newsLetterBtnSubmit}
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
};
