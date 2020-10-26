nums1 = [1, 1, 1, 1]
# const expected1 = [1]

nums2 = [1, 1, 2, 2, 3, 3]
# const expected2 = [1, 2, 3]

nums3 = [1, 1, 2, 3, 3, 4]
# const expected3 = [1, 2, 3, 4]

def removeDuplicates(nums):
    newArr = []
    for value in nums:
        if value not in newArr:
            newArr.append(value)
    return newArr

print(removeDuplicates(nums3))


#   Array: Mode

#   Create a function that, given an array of ints,
#   returns the int that occurs most frequently in the array.

#   What if there are multiple items that occur the same number of time?
#     - return all of them (in an array)
#     - what if all items occur the same number of times?
#       - return empty array
# 

nums1 = []
# const expected1 = [];

nums2 = [1]
# const expected2 = [1];

nums3 = [5, 1, 4]
# const expected3 = [];

nums4 = [5, 1, 4, 1]
# const expected4 = [1];

nums5 = [5, 1, 4, 1, 5]
# const expected5 = [5, 1];
# order doesn't matter

# // find all modes if more than one

def modes(nums):
    numsDict = {}
    newArr=[]
    for value in nums:
        if value not in numsDict:
            numsDict[value] = 1
        else:
            numsDict[value] += 1
    modeArr = []
    max = 0
    for key in numsDict:
        if numsDict[key] > max:
            max = numsDict[key]
    if max == 0 or max == 1:
        return modeArr
    for key in numsDict:
        if numsDict[key] == max:
            modeArr.append(key)
    return modeArr

print (modes(nums5))