import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "./Icons";

export default function SuccessModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl border border-(--color-border) bg-(--color-bg-secondary)/80 p-8 text-center backdrop-blur-xl shadow-2xl shadow-black/10"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 text-(--color-text-muted) hover:text-(--color-text)"
            >
              <X size={20} />
            </button>
            <CheckCircle className="mx-auto mb-4 text-green-500" size={56} />
            <h3 className="text-xl font-bold">Message Sent!</h3>
            <p className="mt-2 text-(--color-text-muted)">
              Thanks for reaching out. I&apos;ll reply as soon as possible.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-(--color-accent) px-8 py-2 font-semibold text-white hover:bg-(--color-accent-hover)"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
