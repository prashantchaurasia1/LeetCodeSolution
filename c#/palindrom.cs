public class Solution {
    public bool IsPalindrome(int x) {
        if(x < 0){
            return false;
        }
        int rev_num = 0, original_num = x;
        
        while(original_num > 0 ){
            rev_num = rev_num * 10 + original_num % 10; 
            original_num = original_num / 10; 
        }
        
        return x == rev_num;
    }
}