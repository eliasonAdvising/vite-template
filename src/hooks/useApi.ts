// API hook using TanStack Query
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { databaseService } from '@/lib/supabase/database';
import { toast } from 'react-hot-toast';

// Query keys
export const queryKeys = {
  profile: (userId: string) => ['profile', userId],
  profiles: () => ['profiles'],
};

// Profile hooks
export function useProfile(userId: string | undefined) {
  return useQuery({
    queryKey: queryKeys.profile(userId!),
    queryFn: () => databaseService.getProfile(userId!),
    enabled: !!userId,
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, updates }: { userId: string; updates: any }) =>
      databaseService.updateProfile(userId, updates),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.profile(data.id), data);
      toast.success('Profile updated successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update profile');
    },
  });
}

export function useCreateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: databaseService.createProfile,
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.profile(data.id), data);
      queryClient.invalidateQueries({ queryKey: queryKeys.profiles() });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create profile');
    },
  });
}