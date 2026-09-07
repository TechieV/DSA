class Solution {
    public int majorityElement(int[] nums) {
        HashMap<Integer,Integer>map = new HashMap<>();
        for(int i: nums){
            int n = nums.length;
            int freq = map.getOrDefault(i,0)+1;
            map.put(i,freq);
            if(freq>n/2){
                return i;
            }
        }
        return -1;
    }
}