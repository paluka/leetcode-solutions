import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;


public class TwoSum {
    public static void main(String[] args) {
        
        
        int[] nums = {2, 7, 11, 15};
        int target = 9;

        int[] result = twoSum(nums, target);
        int[] result1 = twoSum1(nums, target);

        System.out.println(Arrays.toString(result));
        System.out.println(Arrays.toString(result1));
    }

    public static int[] twoSum(int[] nums, int target) {

        if (nums == null || nums.length == 0) {
            return new int[0];
        }
        
        Map<Integer, Integer> map = new HashMap<>();

        for (int index = 0; index < nums.length; index++) {

            int currentValue = nums[index];
            int diff = target - currentValue;

            if (map.containsKey(diff)) {
                return new int[] {map.get(diff), index};
            }

            map.put(currentValue, index);
        }

        return new int[0];
    }

    public static int[] twoSum1(int[] nums, int target) {
        
        if (nums == null || nums.length == 0) {
            return new int[0];
        }
        
        for (int outerIndex = 0; outerIndex < nums.length; outerIndex++) {

            for (int innerIndex = outerIndex + 1; innerIndex < nums.length; innerIndex++) {

                if (nums[outerIndex] + nums[innerIndex] == target) {
                    return new int[] {outerIndex, innerIndex};
                }

            }
        }

        return new int[0];
    }
}