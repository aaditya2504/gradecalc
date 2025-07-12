import java.io.*;
import java.util.*;
import java.lang.Math;

public class Solution {
    public static int get_ans(int N, String A, String B) {
        final int MOD = 1000000007;
        
        // dp[i] = number of ways to partition first i characters
        long[] dp = new long[N + 1];
        dp[0] = 1; // Base case: empty partition
        
        for (int i = 1; i <= N; i++) {
            for (int j = 0; j < i; j++) {
                // Try substring from j to i-1
                String subA = A.substring(j, i);
                String subB = B.substring(j, i);
                
                // Check if subA < subB lexicographically
                if (subA.compareTo(subB) < 0) {
                    dp[i] = (dp[i] + dp[j]) % MOD;
                }
            }
        }
        
        return (int) dp[N];
    }
    
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        int N = Integer.parseInt(scan.nextLine().trim());
        
        String A = scan.nextLine();
        
        String B = scan.nextLine();
        
        int result = get_ans(N, A, B);
        
        System.out.println(result);
        
        scan.close();
    }
}