import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';
import cx from 'classnames';

const Modal = ({ title, children, className, isActive, onClose, theme }) => (
  <Transition appear show={isActive} as={Fragment}>
    <Dialog
      as="div"
      open={isActive}
      className="fixed inset-0 z-10 overflow-y-auto"
      onClose={onClose}
    >
      <div className="min-h-screen px-4 text-center" data-theme={theme}>
        <Transition.Child
          as={Fragment}
          enter="transition-all ease-in-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="ease-in duration-200 transition-all"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-primary" />
        </Transition.Child>
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>

        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-200"
          enterFrom="opacity-0 translate-y-20"
          enterTo="opacity-100 translate-y-0"
          leave="ease-in-out duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-20"
        >
          <div
            className={cx(
              'my-8 inline-block w-full transform overflow-hidden rounded-xl bg-space-light text-left align-middle text-primary shadow transition-all',
              className,
              { 'max-w-lg': !className },
            )}
          >
            {title && (
              <Dialog.Title
                as="h3"
                className="shadow-xs border-b border-grey px-6 py-4 text-lg font-semibold text-primary"
              >
                {title}
              </Dialog.Title>
            )}
            <div className="px-6 py-4">{children}</div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);

Modal.defaultProps = {
  className: '',
  isActive: false,
  theme: 'dark',
  onClose: () => {},
};

Modal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  isActive: PropTypes.bool,
  theme: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Modal;
