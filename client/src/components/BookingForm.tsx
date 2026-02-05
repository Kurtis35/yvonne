import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { z } from "zod";

const formSchema = insertInquirySchema.extend({
  phone: z.string().min(10, "Phone number is required"),
});

export function BookingForm() {
  const mutation = useCreateInquiry();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10" />
      
      <div className="mb-8">
        <h3 className="font-display text-3xl font-bold mb-2">Book Your Visit</h3>
        <p className="text-muted-foreground">Fill out the form below and we'll confirm your appointment shortly.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Jane Doe" 
                    className="h-12 rounded-xl bg-white/50 border-border/50 focus:border-primary/50 focus:ring-primary/20" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="jane@example.com" 
                      className="h-12 rounded-xl bg-white/50 border-border/50 focus:border-primary/50 focus:ring-primary/20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="071 234 5678" 
                      className="h-12 rounded-xl bg-white/50 border-border/50 focus:border-primary/50 focus:ring-primary/20" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Service Interested In / Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="I'd like to book a braiding session..." 
                    className="min-h-[120px] rounded-xl bg-white/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full h-14 rounded-xl text-lg font-medium bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
              </>
            ) : (
              "Request Appointment"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
