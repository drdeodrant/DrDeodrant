import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowRight, Loader2 } from "lucide-react";
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
  variantId: string; // Required for Shopify Link
}

const CheckoutModal = ({ 
  isOpen, 
  onClose, 
  quantity, 
  productName, 
  price, 
  variantId 
}: CheckoutModalProps) => {
  
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    address: "",
    city: "", 
    state: "",
    pinCode: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRedirecting(true);

    const domain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
    
    // Clean ID if necessary (remove graphql prefix)
    const cleanVariantId = variantId.replace('gid://shopify/ProductVariant/', '');

    // 1. Base Cart URL
    const baseUrl = `https://${domain}/cart/${cleanVariantId}:${quantity}`;

    // 2. Pre-fill Checkout Fields
    const params = new URLSearchParams();
    
    // Shopify needs First/Last name split
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(' ') || ".";

    params.append('checkout[email]', formData.email);
    params.append('checkout[shipping_address][first_name]', firstName);
    params.append('checkout[shipping_address][last_name]', lastName);
    params.append('checkout[shipping_address][address1]', formData.address);
    params.append('checkout[shipping_address][city]', formData.city);
    params.append('checkout[shipping_address][province]', formData.state);
    params.append('checkout[shipping_address][zip]', formData.pinCode);
    params.append('checkout[shipping_address][phone]', formData.phone);

    // 3. Redirect
    window.location.href = `${baseUrl}?${params.toString()}`;
  };

  // Custom Input Component (Preserves your design)
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
            
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 100 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="w-full max-w-lg pointer-events-auto max-h-[90vh] flex flex-col"
            >
              <div className="relative bg-white border-4 border-black rounded-[2.5rem] overflow-hidden shadow-[12px_12px_0px_rgba(0,0,0,1)] flex flex-col">
                
                {/* Header */}
                <div className="bg-primary px-6 md:px-8 py-5 flex items-center justify-between border-b-4 border-black shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black rounded-lg text-white">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase italic">
                      Details
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    type="button"
                    className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-y-1 hover:shadow-none hover:bg-red-500 hover:text-white hover:border-black transition-all group"
                  >
                    <X className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-90" />
                  </button>
                </div>

                {/* Scrollable Content Area */}
                <div className="overflow-y-auto custom-scrollbar">
                  
                  {/* Order Summary Ticket */}
                  <div className="bg-yellow-50 px-8 py-5 border-b-4 border-dashed border-black">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Item</p>
                        <p className="text-lg md:text-xl font-bold text-black leading-none truncate max-w-[200px]">
                          {quantity} <span className="text-sm text-gray-500">x</span> {productName}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Total</p>
                        <p className="text-2xl md:text-3xl font-black text-primary leading-none">
                          ₹{price * quantity}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5 bg-white">
                    
                    {/* Name */}
                    <div className="space-y-1">
                      <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest ml-1">Full Name</Label>
                      <FunkyInput id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Elon Musk" />
                    </div>

                    {/* Email (Required for Checkout) */}
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest ml-1">Email</Label>
                      <FunkyInput id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="elon@tesla.com" />
                    </div>

                    {/* Address */}
                    <div className="space-y-1">
                      <Label htmlFor="address" className="text-xs font-black uppercase tracking-widest ml-1">Shipping Address</Label>
                      <FunkyInput id="address" name="address" value={formData.address} onChange={handleChange} required placeholder="Street address" />
                    </div>

                    {/* City & State */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="city" className="text-xs font-black uppercase tracking-widest ml-1">City</Label>
                        <FunkyInput id="city" name="city" value={formData.city} onChange={handleChange} required placeholder="New York" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="state" className="text-xs font-black uppercase tracking-widest ml-1">State</Label>
                        <FunkyInput id="state" name="state" value={formData.state} onChange={handleChange} required placeholder="NY" />
                      </div>
                    </div>

                    {/* Zip & Phone */}
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-1">
                        <Label htmlFor="pinCode" className="text-xs font-black uppercase tracking-widest ml-1">Zip Code</Label>
                        <FunkyInput id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleChange} required placeholder="10001" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="phone" className="text-xs font-black uppercase tracking-widest ml-1">Mobile</Label>
                        <FunkyInput id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+1 555..." />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 pb-2">
                      <Button
                        type="submit"
                        disabled={isRedirecting}
                        className="w-full h-16 bg-black hover:bg-primary text-white text-xl font-black rounded-xl border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_#0047FF] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:border-black active:shadow-none active:translate-x-[0px] active:translate-y-[0px] transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-wait"
                      >
                        {isRedirecting ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            REDIRECTING...
                          </>
                        ) : (
                          <>
                            CONTINUE TO PAYMENT
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                      <p className="text-center text-[10px] font-bold text-gray-400 mt-3 uppercase tracking-widest">
                        You will be redirected to Shopify Secure Checkout
                      </p>
                    </div>
                  </form>
                </div>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;