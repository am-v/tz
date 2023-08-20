/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import cx from "@/common/utils/helpers";

const Button = ({ submit, disabled, primary, className, ...props }) => (
  <button
    type={submit ? "submit" : "button"}
    className={cx(
      "inline-flex cursor-pointer items-center justify-center rounded-full border-2 px-6 py-3 font-semibold ring-grey transition-all focus:ring-1",
      className,
      {
        "border-brand bg-brand text-brand-invert hover:bg-brand-dark": primary,
        "text-invert border-primary-light bg-primary-light hover:border-primary-light hover:bg-primary-dark":
          !primary,
      }
    )}
    disabled={disabled ? true : false}
    {...props}
  />
);

Button.defaultProps = {
  submit: false,
  primary: false,
  className: "",
  disabled: false,
};

Button.propTypes = {
  submit: PropTypes.bool,
  primary: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
