import Script from "next/script";

export const IconifySelect = () => {
  return (
    <div>
      <Script src="https://cdn.jsdelivr.net/npm/iconify-select-plugin@1/iconify-select-plugin.min.js" />
      <button
        className="iconify-open-dialog"
        data-icon-input="iconify-select"
        data-color-input="iconify-color"
      >
        Find an icon!
      </button>
      <input type="text" className="iconify-select" />
      <input type="text" className="iconify-color" />
    </div>
  );
};
