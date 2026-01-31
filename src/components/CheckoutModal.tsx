import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
    // Handle checkout logic here
    console.log("Checkout submitted:", { ...formData, quantity, productName });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-lg -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative bg-background border-4 border-foreground rounded-[2rem] overflow-hidden shadow-[12px_12px_0px_rgba(0,0,0,1)]">
              {/* Header */}
              <div className="bg-primary px-8 py-6 flex items-center justify-between">
                <h2 className="text-2xl md:text-3xl font-black text-primary-foreground tracking-tight">
                  CHECKOUT
                </h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-background rounded-full flex items-center justify-center border-2 border-foreground hover:scale-110 transition-transform"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Order Summary */}
              <div className="px-8 py-4 bg-muted border-b-2 border-foreground">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">
                    {quantity}x {productName}
                  </span>
                  <span className="text-2xl font-black text-primary">
                    ${price * quantity}
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wide">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 border-foreground rounded-xl text-base font-medium focus:ring-primary focus:border-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-bold uppercase tracking-wide">
                    Address
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 border-foreground rounded-xl text-base font-medium focus:ring-primary focus:border-primary"
                    placeholder="123 Main Street, Apt 4B"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm font-bold uppercase tracking-wide">
                      State
                    </Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="h-12 border-2 border-foreground rounded-xl text-base font-medium focus:ring-primary focus:border-primary"
                      placeholder="California"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pinCode" className="text-sm font-bold uppercase tracking-wide">
                      Pin Code
                    </Label>
                    <Input
                      id="pinCode"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      required
                      className="h-12 border-2 border-foreground rounded-xl text-base font-medium focus:ring-primary focus:border-primary"
                      placeholder="90210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-bold uppercase tracking-wide">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 border-foreground rounded-xl text-base font-medium focus:ring-primary focus:border-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 mt-4 bg-primary hover:bg-primary-hover text-primary-foreground text-lg font-black rounded-xl border-2 border-foreground shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                >
                  PLACE ORDER
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
