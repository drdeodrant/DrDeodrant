import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  quantity: number;
  productName: string;
  price: number;
}

const CheckoutModal = ({ isOpen, onClose, quantity, productName, price }: CheckoutModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    state: "",
    pinCode: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout submitted:", { ...formData, quantity, productName });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Custom Input Component to ensure consistent "Funky" styling
  const FunkyInput = ({ ...props }) => (
    <div className="relative group">
      <Input
        {...props}
        className="h-14 px-4 border-2 border-black rounded-xl text-lg font-bold bg-white 
        placeholder:text-gray-400 focus:border-black focus:ring-0 focus:outline-none 
        focus:shadow-[4px_4px_0px_0px_#000] focus:-translate-y-1 focus:-translate-x-1 
        transition-all duration-200 ease-out"
      />
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 100 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="w-[95%] max-w-lg pointer-events-auto"
            >
              <div className="relative bg-white border-4 border-black rounded-[2.5rem] overflow-hidden shadow-[12px_12px_0px_rgba(0,0,0,1)]">
                
                {/* Header */}
                <div className="bg-primary px-8 py-6 flex items-center justify-between border-b-4 border-black">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black rounded-lg text-white">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase italic">
                      Checkout
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-y-1 hover:shadow-none hover:bg-red-500 hover:text-white hover:border-black transition-all group"
                  >
                    <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
                  </button>
                </div>

                {/* Order Summary Ticket */}
                <div className="bg-yellow-50 px-8 py-5 border-b-4 border-dashed border-black">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Item</p>
                      <p className="text-xl font-bold text-black leading-none">
                        {quantity} <span className="text-sm text-gray-500">x</span> {productName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Total</p>
                      <p className="text-3xl font-black text-primary leading-none">
                        ${price * quantity}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5 bg-white">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest ml-1">
                      Full Name
                    </Label>
                    <FunkyInput
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="E.g. Elon Musk"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-xs font-black uppercase tracking-widest ml-1">
                      Shipping Address
                    </Label>
                    <FunkyInput
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Street, Apartment, Suite..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-xs font-black uppercase tracking-widest ml-1">
                        State
                      </Label>
                      <FunkyInput
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        placeholder="NY"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pinCode" className="text-xs font-black uppercase tracking-widest ml-1">
                        Zip Code
                      </Label>
                      <FunkyInput
                        id="pinCode"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleChange}
                        required
                        placeholder="10001"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-black uppercase tracking-widest ml-1">
                      Mobile
                    </Label>
                    <FunkyInput
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full h-16 bg-black hover:bg-primary text-white text-xl font-black rounded-xl border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_#0047FF] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:border-black active:shadow-none active:translate-x-[0px] active:translate-y-[0px] transition-all duration-200 flex items-center justify-center gap-2 group"
                    >
                      CONFIRM ORDER
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-center text-xs font-bold text-gray-400 mt-4 uppercase tracking-widest">
                      Secure 256-bit SSL Encrypted
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;