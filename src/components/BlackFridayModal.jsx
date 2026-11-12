import { useEffect, useRef } from "react";

const BlackFridayModal = () => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const page = document.documentElement;
    const previousOverflow = page.style.overflow;
    const restoreScroll = () => {
      page.style.overflow = previousOverflow;
    };
    const onClose = () => {
      if (!dialog.open) restoreScroll();
    };

    dialog.addEventListener("close", onClose);
    dialog.showModal();
    page.style.overflow = "hidden";

    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.close();
      restoreScroll();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="black-friday-modal"
      aria-labelledby="black-friday-title"
      aria-describedby="black-friday-description"
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current.close();
      }}
    >
      <div className="black-friday-modal__content">
        <form method="dialog" className="black-friday-modal__dismiss">
          <button type="submit" aria-label="Close Black Friday offer" autoFocus>
            <span aria-hidden="true">×</span>
          </button>
        </form>

        <p className="eyebrow">Black Friday.</p>
        <h2 id="black-friday-title">One incredible membership.</h2>
        <p id="black-friday-description" className="black-friday-modal__intro">
          One year of unlimited training, fitness, and recovery.
        </p>
        <p className="black-friday-modal__programs">
          Jiu Jitsu. MMA. Kickboxing. Strength &amp; Conditioning. Yoga. Cold Plunge. Sauna.
        </p>
        <p className="black-friday-modal__roof">Everything under one roof.</p>

        <div className="black-friday-modal__price">
          <p>Regularly <s>$1,740</s>. Get your entire year for just</p>
          <strong>$999</strong>
          <p className="black-friday-modal__savings">Save $741.</p>
        </div>

        <p className="black-friday-modal__deadline">Offer ends November 30.</p>
        <a
          className="button button--gold black-friday-modal__claim"
          href="https://lewisburg-bjj.gymdesk.com/signup/v/lBkqa"
        >
          Claim Your Membership <span aria-hidden="true">↗</span>
        </a>
      </div>
    </dialog>
  );
};

export default BlackFridayModal;
