export function Icon({ src, name, className, place = "top" }) {
  return (
    <img
      className={className}
      src={src}
      alt={name}
      data-tooltip-id="icon"
      data-tooltip-content={name}
      data-tooltip-place={place}
      height={50}
      width={50}
    />
  );
}
