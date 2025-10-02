public class Random{
    public static void main(String[] args){
        String message = "";
        for(int i = 0; i<args.length;i++){
            message += args[i]+" ";
        }
        System.out.println(message);
    }
}